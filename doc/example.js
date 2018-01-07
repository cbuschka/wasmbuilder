import {WasmBuilder} from 'wasmbuilder';

var wasmModule = new WasmBuilder().buildModule();
var wasmImports = {};
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);

var main = wasmInstance.exports.main;
console.log(main());

