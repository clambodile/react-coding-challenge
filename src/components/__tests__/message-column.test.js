import React from "react"
import { render } from "@testing-library/react"
import MessageColumn from "../message-column"

describe("message-column", () => {
  const errors = [{ message: "Test error.", id: 1 }]

  it("renders messages", () => {
    const errorColumn = render(
      <MessageColumn priority={1} messages={errors} label="error" />
    )
    const errMsg = errorColumn.getByText("Test error.")
    expect(errMsg).toBeVisible()
  })

  it("has a label that matches label prop given", () => {
    const errorColumn = render(
      <MessageColumn priority={1} messages={errors} label="error" />
    )
    expect(errorColumn.getByText("Error Type 1")).toBeVisible()
    const warningColumn = render(
      <MessageColumn priority={2} messages={[]} label="warning" />
    )
    expect(warningColumn.getByText("Warning Type 2")).toBeVisible()
    const infoColumn = render(
      <MessageColumn priority={3} messages={[]} label="info" />
    )
    expect(infoColumn.getByText("Info Type 3")).toBeVisible()
  })
  it("maintains message counts", () => {
    const errorColumn = render(
      <MessageColumn priority={1} messages={errors} label="error" />
    )
    expect(errorColumn.getByText("Count: 1")).toBeVisible()
  })
})
