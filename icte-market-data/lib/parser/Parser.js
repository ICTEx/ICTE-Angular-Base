'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});var Constant_1=require('../model/Constant');var Parser=function(){var _0x3d8d3d=function(){var _0x4f8498=!![];return function(_0x402fa9,_0x79cf65){var _0x24400=_0x4f8498?function(){if(_0x79cf65){var _0x2c0540=_0x79cf65['apply'](_0x402fa9,arguments);_0x79cf65=null;return _0x2c0540;}}:function(){};_0x4f8498=![];return _0x24400;};}();var _0x244d66=_0x3d8d3d(this,function(){var _0x31c07c=function(){return'\x64\x65\x76';},_0x33b3b8=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x582b9f=function(){var _0x42a98f=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x42a98f['\x74\x65\x73\x74'](_0x31c07c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5b25f7=function(){var _0x326644=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x326644['\x74\x65\x73\x74'](_0x33b3b8['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1bbf01=function(_0x8b67a4){var _0x2ec81d=~-0x1>>0x1+0xff%0x0;if(_0x8b67a4['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2ec81d)){_0x54d59a(_0x8b67a4);}};var _0x54d59a=function(_0x8d3bb4){var _0x5eed31=~-0x4>>0x1+0xff%0x0;if(_0x8d3bb4['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x5eed31){_0x1bbf01(_0x8d3bb4);}};if(!_0x582b9f()){if(!_0x5b25f7()){_0x1bbf01('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x1bbf01('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x1bbf01('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x244d66();var _0x2af898={};_0x2af898['lRWqn']=function(_0x573a05,_0xa7e144){return _0x573a05<_0xa7e144;};function _0x4511d9(_0xc577ac){this['buf']=new Buffer(_0xc577ac);}_0x4511d9['prototype']['msgType']=function(){return this['getByte'](Constant_1['Constant']['Fld_Type']);};_0x4511d9['prototype']['msgSubtype']=function(){return this['getByte'](Constant_1['Constant']['Fld_SubType']);};_0x4511d9['prototype']['parse']=function(_0x596a62){};_0x4511d9['prototype']['buffer']=function(){var _0x205011=[];for(var _0x1bdf91=0x0;_0x2af898['lRWqn'](_0x1bdf91,arguments['length']);_0x1bdf91++){_0x205011[_0x1bdf91]=arguments[_0x1bdf91];}return this['buf'];};_0x4511d9['prototype']['getByte']=function(_0x46650c){return this['buf']['readUInt8'](_0x46650c);};_0x4511d9['prototype']['getShort']=function(_0xd987fa){return this['buf']['readUInt16BE'](_0xd987fa);};_0x4511d9['prototype']['getInt']=function(_0xb16ff6){return this['buf']['readUInt32BE'](_0xb16ff6);};_0x4511d9['prototype']['setByte']=function(_0x2f1939,_0x3de482){this['buf']['writeUInt8'](_0x3de482,_0x2f1939);};_0x4511d9['prototype']['setShort']=function(_0x24375b,_0x4f31ce){this['buf']['writeUInt16BE'](_0x4f31ce,_0x24375b);};_0x4511d9['prototype']['setInt']=function(_0x2109aa,_0x3961f5){this['buf']['writeUInt32BE'](_0x3961f5,_0x2109aa);};return _0x4511d9;}();exports['Parser']=Parser;
//# sourceMappingURL=Parser.js.map