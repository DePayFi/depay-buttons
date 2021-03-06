import Button from './components/button'
import DePayWidgets from 'depay-widgets'
import insideStyle from './styles/insideStyle'
import outsideStyle from './styles/outsideStyle'
import React from 'react'
import ReactShadowDOM from 'depay-react-shadow-dom'

interface initParameters {
  document: Document
}

const init = function ({ document }: initParameters): void {
  Array.from(document.getElementsByClassName('DePayButton')).forEach((element) => {
    const label = element.getAttribute('label') || 'Pay'
    const widget = element.getAttribute('widget') || 'Payment'
    const widgetArguments = JSON.parse(element.getAttribute('arguments') || '{}')
    const onclickHandler = function () {
      DePayWidgets[widget](widgetArguments)
    }
    ReactShadowDOM({
      document,
      element,
      content: <Button label={label} onClick={onclickHandler} />,
      outsideStyle: outsideStyle,
      insideStyle: insideStyle,
    })
  })
}

export { init }
