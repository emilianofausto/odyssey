/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import {
  createContext,
  useContext,
  useState,
  ComponentPropsWithoutRef,
} from "react";
import type { ComponentProps, ReactNode, AnimationEvent } from "react";
import {
  useCx,
  useOmit,
  useOid,
  oid,
  withStyles,
  forwardRefWithStatics,
} from "../../utils";
import styles from "./Toast.module.scss";
import Button from "../Button";
import {
  GetInfoIcon,
  ErrorIcon,
  CautionIcon,
  CompleteIcon,
  CloseIcon,
} from "../Icon";
import type { Props as ButtonProps } from "../Button";

interface Props
  extends Omit<
    ComponentPropsWithoutRef<"aside">,
    "children" | "style" | "className" | "role"
  > {
  children?: never;
  /**
   * The title to be displayed on the toast.
   */
  title: string;

  /**
   * Supplemental information. Be concise - less than three lines of content - as your Toast will soon vanish!
   */
  body?: string;

  /**
   * The visual variant to be displayed to the user.
   * @default info
   */
  variant?: "info" | "success" | "caution" | "danger";

  onAnimationEnd?: (event: AnimationEvent) => void;

  onDismiss?: ButtonProps["onClick"];
}

interface PropsToastProvider {
  /**
   * Child react nodes which leverage the toast context. This is typically an entire app.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Callback function invoked when a toast exits the toast provider.
   */
  onToastExit?: (id: string) => void;
}

interface Statics {
  Provider: typeof ToastProvider;
}

interface ToastObject {
  id?: string;
  title: string;
  body?: string;
  variant?: Props["variant"];
}

type AddToastType = (toastObj: ToastObject) => void;
interface Context {
  addToast: AddToastType;
}

const ToastContext = createContext<Context>({
  addToast: () => void 0,
});

const icon = {
  info: <GetInfoIcon />,
  danger: <ErrorIcon />,
  caution: <CautionIcon />,
  success: <CompleteIcon />,
};

/**
 * Toasts are transient, non-disruptive messages that provide at-a-glance,
 * asynchronous feedback or updates.
 */
let Toast = forwardRefWithStatics<HTMLElement, Props, Statics>((props, ref) => {
  const { title, body, variant = "info", id, onDismiss, ...rest } = props;
  const componentClass = useCx(styles.root, styles[`${variant}Variant`]);
  const xid = useOid(id);
  const omitProps = useOmit(rest);

  return (
    <aside
      {...omitProps}
      ref={ref}
      role="status"
      id={xid}
      className={componentClass}
    >
      <span className={styles.icon}>{icon[variant]}</span>
      <h1 className={styles.title}>{title}</h1>
      {body && <p className={styles.body}>{body}</p>}
      <span className={styles.dismiss}>
        <Button
          variant="dismiss"
          onClick={onDismiss}
          aria-label="Dismiss toast"
          icon={<CloseIcon />}
        />
      </span>
    </aside>
  );
});

/**
 * Provides applications a way to add Toasts to their app
 */
const ToastProvider = ({ children, onToastExit }: PropsToastProvider) => {
  const [toasts, setToasts] = useState<ToastObject[]>([]);

  const addToast = (toast: ToastObject) => {
    const id = toast.id || oid();
    setToasts([...toasts, { ...toast, id }]);
  };

  const handleDismiss = (id: string) => {
    if (typeof onToastExit === "function") onToastExit(id);

    removeToast(id);
  };

  const removeToast = (id: string) => {
    setToasts([...toasts.filter((toast) => toast.id !== id)]);
  };

  const handleAnimationEnd = (event: AnimationEvent) => {
    const { animationName, currentTarget } = event;
    if (animationName === styles.toastOut) {
      handleDismiss(currentTarget.id);
    }
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className={styles.toastPen} data-testid="ods-toast-pen">
        {toasts.map(({ title, body, variant = "info", id = oid() }) => (
          <Toast
            id={id}
            key={id}
            title={title}
            body={body}
            variant={variant}
            onDismiss={() => {
              handleDismiss(id);
            }}
            onAnimationEnd={handleAnimationEnd}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): Context => {
  const context = useContext(ToastContext);

  if (Object.keys(context).length === 0) {
    throw new Error("useToast must be used within a Toast.Provider");
  }

  return context;
};

Toast.displayName = "Toast";

ToastProvider.displayName = "ToastProvider";
Toast.Provider = ToastProvider;

Toast = withStyles(styles)(Toast);

type ToastProps = ComponentProps<typeof Toast>;
export type { ToastProps as Props };

export default Toast;