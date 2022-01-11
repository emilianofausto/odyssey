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

import React from "react";
import { render, screen } from "@testing-library/react";
import { Field } from ".";

const tree = () => (
  <Field inputId="foo" label="bar" children={<input id="foo" />} />
);

describe("Field", () => {
  it("renders visibly", () => {
    render(tree());
    expect(screen.getByRole("textbox", { name: "bar" })).toBeVisible();
  });

  a11yCheck(() => render(tree()));

  describe("Field.Error", () => {
    const tree = () => <Field.Error children="error" id="foo" />;

    it("renders visibly", () => {
      render(tree());
      expect(screen.getByText("error")).toBeVisible();
    });

    a11yCheck(() => render(tree()));
  });

  describe("Field.Label", () => {
    const tree = () => <Field.Label inputId="foo" required children="label" />;

    it("renders visibly", () => {
      render(tree());
      expect(screen.getByText("label")).toBeVisible();
    });

    a11yCheck(() => render(tree()));
  });

  describe("Field.Hint", () => {
    const tree = () => <Field.Hint id="foo" children="hint" />;

    it("renders visibly", () => {
      render(tree());
      expect(screen.getByText("hint")).toBeVisible();
    });

    a11yCheck(() => render(tree()));
  });
});