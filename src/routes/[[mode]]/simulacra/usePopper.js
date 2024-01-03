import { createPopper } from '@popperjs/core';

 // An action is a function that takes in an element and params and returns an object with functions like update() and destroy()
 // https://www.youtube.com/watch?v=CFj4X0bGOvE

export default function createPopperAction() {
    let popperElement, popperTooltip, popperParams
    let popper

    function initializePopper() {
        if (popperElement && popperTooltip) {
            popper = createPopper(popperElement, popperTooltip, popperParams)
        }
    }

    function destroyPopper() {
        if (popper) {
            popper.destroy()
            popper = null
        }
    }

    function usePopperElement(element) {
        popperElement = element
        initializePopper()

        return {
            destroy() {
                popperElement = null
                destroyPopper()
            }
        }
    }
    
    function usePopperTooltip(element, params) {
        popperTooltip = element
        popperParams = params
        initializePopper()

        return {
            update(newParams) {
                popperParams = newParams;
                popper.setOptions(popperParams)
            },
            destroy() {
                popperTooltip = null
                destroyPopper()
            }
        }
    }

    return [usePopperElement, usePopperTooltip]
}
