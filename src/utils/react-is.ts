import React from 'react'

// Directly ported from:
// https://unpkg.com/browse/react-is@19.0.0-beta-4508873393-20240430/cjs/react-is.production.js
// It's very possible this could change in the future, but given that
// we only use these in `connect`, this is a low priority.

// import {
//   ForwardRef,
//   Memo,
//   isContextConsumer as _isContextConsumer,
//   isMemo as _isMemo,
//   isValidElementType as _isValidElementType,
// } from 'react-is'
export {
  ForwardRef,
  Memo,
  isContextConsumer,
  isMemo,
  isValidElementType,
} from 'react-is'

// export const isValidElementType: typeof _isValidElementType = /*#__PURE__*/ (
//   type: any,
// ) => _isValidElementType(type)

// export const isContextConsumer: typeof _isContextConsumer = /*#__PURE__*/ (
//   type: any,
// ) => _isContextConsumer(type)

// export const isMemo: typeof _isMemo = /*#__PURE__*/ (type: any) => _isMemo(type)

// export { ForwardRef, Memo }

export const IS_REACT_19 = React.version.startsWith('19')
