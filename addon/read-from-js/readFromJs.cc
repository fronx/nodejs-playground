// #define BUILDING_NODE_EXTENSION
#include <node.h>

using namespace v8;

Handle<Value> Add(const Arguments& args) {
  HandleScope scope;
  if (args.Length() < 2) {
    ThrowException(Exception::TypeError(String::New("Wrong number of arguments")));
    return scope.Close(Undefined());
  }
  if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
    ThrowException(Exception::TypeError(String::New("Wrong arguments")));
    return scope.Close(Undefined());
  }
  int sum = 0;
  for (int i=0; i < args.Length(); i++)
    sum += args[i]->NumberValue();

  Local<Number> num = Number::New(sum);
  return scope.Close(num);
}

void Init(Handle<Object> exports) {
  exports->Set(
    String::NewSymbol("add"),
    FunctionTemplate::New(Add)->GetFunction()
  );
}

NODE_MODULE(readFromJs, Init)
