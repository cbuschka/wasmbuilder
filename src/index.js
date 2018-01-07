import {WasmBuilder} from './WasmBuilder';

export {WasmBuilder};

var wasmModule = new WasmBuilder().buildModule();
var wasmImports = {};
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);

var main = wasmInstance.exports.main;
log(main());





