import React from "react"
import { render, wait, cleanup } from "@testing-library/react"
import { shallow, mount } from "enzyme"
import MessageList from "../message-list"

describe("message-list", () => {
  it("shows an error snackbar for 2 seconds after an error is generated", async () => {
    const wrapper = mount(<MessageList />)
    const instance = wrapper.instance()
    instance.toggleApi()
    instance.setState({
      infoMessages: [],
      errorMessages: [],
      warningMessages: [],
      showErrorSnackbar: false
    })
    expect(instance.state.showErrorSnackbar).toBe(false)
    instance.messageCallback({ message: "Test error.", priority: 1, id: 1 })
    expect(instance.state.showErrorSnackbar).toBe(true)
    await wait(
      () => {
        expect(instance.state.showErrorSnackbar).toBe(false)
      },
      { timeout: 2000 }
    )
  })

  it("allows messages to be cleared by clicking Clear button", async () => {
    const wrapper = mount(<MessageList />)
    wrapper.setState({
      infoMessages: [{ message: "Test info.", priority: 3, id: "5" }],
      errorMessages: [],
      warningMessages: [],
      showErrorSnackbar: false
    })
    expect(wrapper.find(".infoMessage").length).toBeGreaterThan(0)
    const button = wrapper.find(".clearButton").first()
    button.simulate("click")
    expect(wrapper.find(".infoMessage").length).toBe(0)
  })

  it("exposes a Start/Stop button to toggle api", () => {
    const wrapper = mount(<MessageList />)
    const button = wrapper.find("#toggle").first()
    expect(button.text()).toBe("Stop")
    button.simulate("click")
    expect(button.text()).toBe("Start")
  })

  it("exposes a clear button to clear all messages", () => {
    const wrapper = mount(<MessageList />)
    const button = wrapper.find("#clearAll").first()
    wrapper.setState({
      errorMessages: [{ message: "Test error.", priority: 1, id: 1 }],
      warningMessages: [{ message: "Test warning.", priority: 2, id: 2 }],
      infoMessages: [{ message: "Test info.", priority: 3, id: 0 }],
      showErrorSnackbar: false
    })
    expect(wrapper.find(".errorMessage").length).toBeGreaterThan(0)
    expect(wrapper.find(".warningMessage").length).toBeGreaterThan(0)
    expect(wrapper.find(".infoMessage").length).toBeGreaterThan(0)
    button.simulate("click")
    expect(wrapper.find(".errorMessage").length).toBe(0)
    expect(wrapper.find(".warningMessage").length).toBe(0)
    expect(wrapper.find(".infoMessage").length).toBe(0)
  })

  it("has a header", () => {
    const { getByText } = render(<MessageList />)
    expect(getByText("Help.com Coding Challenge")).toBeVisible()
  })
})
