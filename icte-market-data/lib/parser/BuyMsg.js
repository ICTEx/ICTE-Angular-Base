'use strict';var __extends=this&&this['__extends']||function(){var _0x4d151c={};_0x4d151c['HfpqY']=function(_0x5a91a1,_0x32cc47){return _0x5a91a1 instanceof _0x32cc47;};_0x4d151c['SBICQ']=function(_0xc4e6fe,_0x31e56c,_0x487794){return _0xc4e6fe(_0x31e56c,_0x487794);};_0x4d151c['ADuhv']=function(_0x2c3bdf,_0x3be465){return _0x2c3bdf===_0x3be465;};var _0x5e3968=function(_0x123914,_0x1c2d02){_0x5e3968=Object['setPrototypeOf']||_0x4d151c['HfpqY']({'__proto__':[]},Array)&&function(_0x123914,_0x1c2d02){_0x123914['__proto__']=_0x1c2d02;}||function(_0x123914,_0x1c2d02){for(var _0x2102f5 in _0x1c2d02)if(_0x1c2d02['hasOwnProperty'](_0x2102f5))_0x123914[_0x2102f5]=_0x1c2d02[_0x2102f5];};return _0x4d151c['SBICQ'](_0x5e3968,_0x123914,_0x1c2d02);};return function(_0x327367,_0x11d1d6){_0x5e3968(_0x327367,_0x11d1d6);function _0x86b5fc(){this['constructor']=_0x327367;}_0x327367['prototype']=_0x4d151c['ADuhv'](_0x11d1d6,null)?Object['create'](_0x11d1d6):(_0x86b5fc['prototype']=_0x11d1d6['prototype'],new _0x86b5fc());};}();Object['defineProperty'](exports,'__esModule',{'value':!![]});var Constant_1=require('../model/Constant');var APriceMsg_1=require('./APriceMsg');var BuyMsg=function(_0x31cb68){__extends(_0x529160,_0x31cb68);function _0x529160(){var _0x4c45cb=_0x31cb68['call'](this,_0x529160['Msg_Size'])||this;_0x4c45cb['setByte'](Constant_1['Constant']['Fld_Type'],Constant_1['Constant']['Msg_Quote']);_0x4c45cb['setByte'](Constant_1['Constant']['Fld_SubType'],Constant_1['Constant']['Sub_Buy']);return _0x4c45cb;}return _0x529160;}(APriceMsg_1['APriceMsg']);exports['BuyMsg']=BuyMsg;