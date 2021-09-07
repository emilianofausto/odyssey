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

// Code automatically generated by svgr; DO NOT EDIT.

import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { useOmit } from "../../utils";
import Icon from "./Icon";

export interface Props
  extends Omit<ComponentPropsWithRef<"svg">, "style" | "className"> {
  title?: string;
}

const Delete = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <Icon ref={ref} {...omitProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.5 2C4.5 1.5 5 1 5.5 1H8.5C9 1 9.5 1.5 9.5 2V3H8V2.5C8 2.22386 8 2 8 2H6C6 2.5 6 2.22386 6 2.5V3H4.5V2zM2.6379 4.2931C2.71904 4.1146 2.89701 4 3.09309 4H10.9072C11.1033 4 11.2813 4.1146 11.3624 4.2931L11.9776 5.64655C12.0528 5.81207 11.9318 6 11.75 6H2.25029C2.06847 6 1.94746 5.81207 2.0227 5.64655L2.6379 4.2931zM3.5 12C3.5 12.5 4 13 4.5 13H9.5C10 13 10.5 12.5 10.5 12L11 7H3L3.5 12z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
});

export default Delete;
