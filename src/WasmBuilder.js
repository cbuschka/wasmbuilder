class WasmBuilder {
  buildCode() {
/*
int main() { 
  return 42;
}


(module
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "main" (func $main))
 (func $main (; 0 ;) (result i32)
  (i32.const 42)
 )
)
*/

    var wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,133,128,128,128,0,1,96,0,1,127,3,130,128,128,128,0,1,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,145,128,128,128,0,2,6,109,101,109,111,114,121,2,0,4,109,97,105,110,0,0,10,138,128,128,128,0,1,132,128,128,128,0,0,65,42,11]);
    return wasmCode;
  }

  buildModule() {
    return new WebAssembly.Module(this.buildCode());
  }
}

export WasmBuilder;

var wasmModule = new WasmBuilder().buildModule();
var wasmImports = {};
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);

var main = wasmInstance.exports.main;
log(main());





