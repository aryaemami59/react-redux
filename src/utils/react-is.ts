import type { ElementType, MemoExoticComponent, ReactElement } from 'react'
import React from 'react'

// Directly ported from:
// https://unpkg.com/browse/react-is@19.0.0-beta-4508873393-20240430/cjs/react-is.production.js
// It's very possible this could change in the future, but given that
// we only use these in `connect`, this is a low priority.

const IS_REACT_19 = React.version.startsWith('18')

const REACT_ELEMENT_TYPE = Symbol.for(
  IS_REACT_19 ? 'react.transitional.element' : 'react.element',
)
const REACT_PORTAL_TYPE = Symbol.for('react.portal')
const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment')
const REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode')
const REACT_PROFILER_TYPE = Symbol.for('react.profiler')
Symbol.for('react.provider')
const REACT_CONSUMER_TYPE = Symbol.for('react.consumer')
const REACT_CONTEXT_TYPE = Symbol.for('react.context')
const REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref')
const REACT_SUSPENSE_TYPE = Symbol.for('react.suspense')
const REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list')
const REACT_MEMO_TYPE = Symbol.for('react.memo')
const REACT_LAZY_TYPE = Symbol.for('react.lazy')
const REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen')
const REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference')

export function isValidElementType(type: any): type is ElementType {
  return 'string' === typeof type ||
    'function' === typeof type ||
    type === REACT_FRAGMENT_TYPE ||
    type === REACT_PROFILER_TYPE ||
    type === REACT_STRICT_MODE_TYPE ||
    type === REACT_SUSPENSE_TYPE ||
    type === REACT_SUSPENSE_LIST_TYPE ||
    type === REACT_OFFSCREEN_TYPE ||
    ('object' === typeof type &&
      null !== type &&
      (type.$$typeof === REACT_LAZY_TYPE ||
        type.$$typeof === REACT_MEMO_TYPE ||
        type.$$typeof === REACT_CONTEXT_TYPE ||
        type.$$typeof === REACT_CONSUMER_TYPE ||
        type.$$typeof === REACT_FORWARD_REF_TYPE ||
        type.$$typeof === REACT_CLIENT_REFERENCE ||
        undefined !== type.getModuleId))
    ? !0
    : !1
}

export function typeOf(object: any) {
  if ('object' === typeof object && null !== object) {
    const $$typeof = object.$$typeof
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        switch (((object = object.type), object)) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return object
          default:
            switch (((object = object && object.$$typeof), object)) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
                return object
              case REACT_CONSUMER_TYPE:
                return object
              default:
                return $$typeof
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof
    }
  }
}

export const ContextConsumer = REACT_CONSUMER_TYPE
export const ContextProvider = REACT_CONTEXT_TYPE
export const Element = REACT_ELEMENT_TYPE
export const ForwardRef = REACT_FORWARD_REF_TYPE
export const Fragment = REACT_FRAGMENT_TYPE
export const Lazy = REACT_LAZY_TYPE
export const Memo = REACT_MEMO_TYPE
export const Portal = REACT_PORTAL_TYPE
export const Profiler = REACT_PROFILER_TYPE
export const StrictMode = REACT_STRICT_MODE_TYPE
export const Suspense = REACT_SUSPENSE_TYPE
export const SuspenseList = REACT_SUSPENSE_LIST_TYPE

export function isContextConsumer(object: any): object is ReactElement {
  return IS_REACT_19
    ? typeOf(object) === REACT_CONSUMER_TYPE
    : typeOf(object) === REACT_CONTEXT_TYPE
}
export function isContextProvider(object: any) {
  return typeOf(object) === REACT_CONTEXT_TYPE
}
export function isElement(object: any) {
  return (
    typeof object === 'object' &&
    object !== null &&
    object.$$typeof === REACT_ELEMENT_TYPE
  )
}
export function isForwardRef(object: any) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE
}
export function isFragment(object: any) {
  return typeOf(object) === REACT_FRAGMENT_TYPE
}
export function isLazy(object: any) {
  return typeOf(object) === REACT_LAZY_TYPE
}
export function isMemo(object: any): object is MemoExoticComponent<any> {
  return typeOf(object) === REACT_MEMO_TYPE
}
export function isPortal(object: any) {
  return typeOf(object) === REACT_PORTAL_TYPE
}
export function isProfiler(object: any) {
  return typeOf(object) === REACT_PROFILER_TYPE
}
export function isStrictMode(object: any) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE
}
export function isSuspense(object: any) {
  return typeOf(object) === REACT_SUSPENSE_TYPE
}
export function isSuspenseList(object: any) {
  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE
}
