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

const Filter = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <Icon ref={ref} {...omitProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 4C1 3.44772 1.44772 3 2 3H12C12.5523 3 13 3.44772 13 4 13 4.55228 12.5523 5 12 5H2C1.44772 5 1 4.55228 1 4zM3 7C3 6.44772 3.44772 6 4 6H10C10.5523 6 11 6.44772 11 7 11 7.55228 10.5523 8 10 8H4C3.44772 8 3 7.55228 3 7zM5 10C5 9.44772 5.44772 9 6 9H8C8.55228 9 9 9.44772 9 10 9 10.5523 8.55228 11 8 11H6C5.44772 11 5 10.5523 5 10z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
});

export default Filter;
