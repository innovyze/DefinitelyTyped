// Type definitions for framebus 2.0
// Project: https://github.com/braintree/framebus
// Definitions by: kbukum <https://github.com/kbukum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace framebus;

export interface FrameBus {
    publish(event: string, args: any[], callback: Callback): boolean;
    pub(event: string, args: any[], callback: Callback): boolean;
    trigger(event: string, args: any[], callback: Callback): boolean;
    emit(event: string, args: any[], callback: Callback): boolean;
    subscribe(event: string, fn: Callback): boolean;
    sub(event: string, fn: Callback): boolean;
    on(event: string, fn: Callback): boolean;
    unsubscribe(event: string, fn: Callback): boolean;
    unsub(event: string, fn: Callback): boolean;
    off(event: string, fn: Callback): boolean;
}
/*~ If this module has methods, declare them as functions like so.
 */
/**
 * let popup = window.open('https://example.com');
 * framebus.include(popup);
 * framebus.emit('hello popup and friends!');
 * @param popup
 */
export function include(popup: Window): boolean;
/**
 * framebus.target('https://example.com').on('my cool event', function () {});
 * // will ignore all incoming 'my cool event' NOT from 'https://example.com'
 * @param origin {string}
 */
export function target(origin: string): FrameBus;

/**
 * let callback = (data: any) => {
 *    console.log('Got back %s as a reply!', data)
 * }
 * framebus.publish('Marco!', callback, 'http://listener.example.com');
 * @param event {string} The name of the event
 * @param args  {...any[]} The data to give to subscribers
 * // @param last{callback(data)} Give subscribers a function for easy, direct replies
 */
export function publish(event: string, ...args: any[]/* fn:  callback(data:)*/): boolean;

/**
 * publish = pub = trigger = emit
 * framebus.publish('Marco!', callback, 'http://listener.example.com');
 * @param event {string} The name of the event
 * @param args  {...any[]} The data to give to subscribers
 * // @param last{callback(data)} Give subscribers a function for easy, direct replies
 */
export function pub(event: string, ...args: any[]): boolean;
/**
 * publish = pub = trigger = emit
 * @param event {string} The name of the event
 * @param args  {...any[]} The data to give to subscribers
 * // @param last{callback(data)} Give subscribers a function for easy, direct replies
 */
export function trigger(event: string, ...args: any[]): boolean;
/**
 * publish = pub = trigger = emit
 * @param event {string} The name of the event
 * @param args  {...any[]} The data to give to subscribers
 * // @param last{callback(data)} Give subscribers a function for easy, direct replies
 */
export function emit(event: string, ...args: any[]): boolean;
/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param event {string} The name of the event
 * @param fn  {Callback} ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 */
export function subscribe(event: string, fn: (...args: any[]) => any): boolean;
/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param event {string} The name of the event
 * @param fn  {Callback} ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 */
export function sub(event: string, fn: (...args: any[]) => any): boolean;
/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param event {string} The name of the event
 * @param fn  {Callback} ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 */
export function on(event: string, fn: (...args: any[]) => any): boolean;
/**
 * @param event {string} The name of the event
 * @param fn {Callback} The function that was subscribed
 */
export function unsubscribe(event: string, fn: (...args: any[]) => any): boolean;
/**
 * @param event {string} The name of the event
 * @param fn {Callback} The function that was subscribed
 */
export function unsub(event: string, fn: (...args: any[]) => any): boolean;
/**
 * @param event {string} The name of the event
 * @param fn {Callback} The function that was subscribed
 */
export function off(event: string, fn: (...args: any[]) => any): boolean;
