'use strict';var __extends=this&&this['__extends']||function(){var _0x9636f8={};_0x9636f8['ZbtPm']=function(_0x3e010f,_0x3b1bec,_0x4ff6a5){return _0x3e010f(_0x3b1bec,_0x4ff6a5);};_0x9636f8['nfRBU']=function(_0x25764c,_0x1c9f01){return _0x25764c===_0x1c9f01;};var _0x3fd563=function(_0x56f450,_0x26412e){_0x3fd563=Object['setPrototypeOf']||{'__proto__':[]}instanceof Array&&function(_0x56f450,_0x26412e){_0x56f450['__proto__']=_0x26412e;}||function(_0x56f450,_0x26412e){for(var _0x4ba6c8 in _0x26412e)if(_0x26412e['hasOwnProperty'](_0x4ba6c8))_0x56f450[_0x4ba6c8]=_0x26412e[_0x4ba6c8];};return _0x3fd563(_0x56f450,_0x26412e);};return function(_0x559374,_0x3f0cde){_0x9636f8['ZbtPm'](_0x3fd563,_0x559374,_0x3f0cde);function _0x2b9674(){this['constructor']=_0x559374;}_0x559374['prototype']=_0x9636f8['nfRBU'](_0x3f0cde,null)?Object['create'](_0x3f0cde):(_0x2b9674['prototype']=_0x3f0cde['prototype'],new _0x2b9674());};}();Object['defineProperty'](exports,'__esModule',{'value':!![]});var EventEmiter=require('events');var BitfinexConstant_1=require('./BitfinexConstant');var Utilities_1=require('../../model/Utilities');var MdUtils_1=require('../api/MdUtils');var WebSocket=require('isomorphic-ws');var BitfinexProxy=function(_0x79c5a4){var _0x5a87ec={};_0x5a87ec['LWWQK']=function(_0x222f77,_0x1c1117,_0x595864){return _0x222f77(_0x1c1117,_0x595864);};_0x5a87ec['CLPDM']='Connected';_0x5a87ec['nIDCw']=function(_0x3bc275,_0x35deea){return _0x3bc275==_0x35deea;};_0x5a87ec['oRsGV']='ticker';_0x5a87ec['MXFCM']='error';_0x5a87ec['KCaOP']=function(_0x38a247,_0x4c8005){return _0x38a247+_0x4c8005;};_0x5a87ec['DcrdK']=function(_0x5b2884,_0x365144){return _0x5b2884+_0x365144;};_0x5a87ec['QfsQL']=function(_0x8dba67,_0x1888f3){return _0x8dba67+_0x1888f3;};_0x5a87ec['fJXGI']='info';_0x5a87ec['QujRq']=function(_0x508d3b,_0x4faf71){return _0x508d3b+_0x4faf71;};_0x5a87ec['nIbWi']='Version:';_0x5a87ec['VIIBj']='Platform\x20status:\x20';_0x5a87ec['fFlEn']='{\x22event\x22:\x22ping\x22,\x22cid\x22:';_0x5a87ec['wOYNO']=function(_0x3641ff,_0x3787a8){return _0x3641ff/_0x3787a8;};_0x5a87ec['RRxex']=function(_0x1b6ed2,_0x5e2ae3){return _0x1b6ed2<_0x5e2ae3;};_0x5a87ec['yKRsX']=function(_0x38cbff,_0x533097){return _0x38cbff+_0x533097;};_0x5a87ec['JNSOT']=function(_0x16833a,_0x28d80e){return _0x16833a+_0x28d80e;};_0x5a87ec['SYGbJ']=function(_0x30909c,_0xc77577){return _0x30909c!=_0xc77577;};_0x5a87ec['LWWQK'](__extends,_0x36301c,_0x79c5a4);function _0x36301c(){var _0x22b994={};_0x22b994['fomrv']=function(_0x51235d,_0x41e4d1){return _0x51235d+_0x41e4d1;};_0x22b994['jayGh']=_0x5a87ec.fFlEn;var _0x3a5533=_0x79c5a4['call'](this)||this;_0x3a5533['wsState']=WebSocket['CLOSE'];_0x3a5533['_channels']={};_0x3a5533['cid']=MdUtils_1['MdUtils']['getMsSinceMidnight']();var _0x13e661=BitfinexConstant_1['BitfinexConstant']['baseEndpoint'];_0x3a5533['webSocket']=new WebSocket(_0x13e661);_0x3a5533['webSocket']['onopen']=function(_0x5bda5b){_0x3a5533['_keepAliveInterval']=_0x5a87ec['LWWQK'](setInterval,function(){_0x3a5533['webSocket']['send'](_0x22b994['fomrv'](_0x22b994['jayGh']+_0x3a5533['cid'],'}'));},0x1388);_0x3a5533['wsState']=_0x5bda5b['target']['readyState'];_0x3a5533['emit'](BitfinexConstant_1['BitfinexConstant']['OPENEVENT'],_0x5a87ec['CLPDM']);_0x3a5533['subscribe']();};_0x3a5533['webSocket']['onclose']=function(_0x5a93f2){_0x3a5533['emit'](BitfinexConstant_1['BitfinexConstant']['CLOSEEVENT'],_0x5a93f2);};_0x3a5533['webSocket']['onerror']=function(_0x45d128){_0x3a5533['emit'](BitfinexConstant_1['BitfinexConstant']['ERROREVENT'],_0x45d128);};_0x3a5533['webSocket']['onmessage']=function(_0x4149df){var _0x17a799=JSON['parse'](_0x4149df['data']);if(!Array['isArray'](_0x17a799)){var _0x40989c=_0x17a799['event'];switch(_0x40989c){case'pong':break;case'subscribed':if(_0x5a87ec['nIDCw'](_0x17a799['channel'],_0x5a87ec['oRsGV'])){_0x3a5533['_channels'][_0x17a799['chanId']]=_0x17a799['pair'];_0x3a5533['emit'](BitfinexConstant_1['BitfinexConstant']['SUBSCRIBEDEVENT'],_0x17a799);}break;case _0x5a87ec['MXFCM']:_0x3a5533['emit'](BitfinexConstant_1['BitfinexConstant']['ERROREVENT'],_0x5a87ec['KCaOP'](_0x5a87ec['KCaOP'](_0x5a87ec['DcrdK'](_0x5a87ec['DcrdK'](_0x5a87ec['QfsQL'](_0x17a799['code'],',\x20')+(_0x17a799['channel']?_0x17a799['channel']:'-'),',\x20')+_0x17a799['msg'],',\x20'),_0x17a799['symbol']?_0x17a799['symbol']:''),',\x20')+(_0x17a799['pair']?_0x17a799['pair']:''));break;case _0x5a87ec['fJXGI']:if(_0x17a799['code']){_0x3a5533['chkInfoMsg'](_0x17a799['code'],_0x17a799['msg']);}else if(_0x17a799['version']){_0x3a5533['chkInfoMsg'](_0x5a87ec['QujRq'](_0x5a87ec['nIbWi'],_0x17a799['version']),_0x5a87ec['QujRq'](_0x5a87ec['VIIBj'],_0x17a799['platform']['status']));}break;}}else{_0x3a5533['processMsg'](_0x17a799);}};return _0x3a5533;}_0x36301c['prototype']['utcTimeStamp']=function(){var _0x21c9eb=new Date();var _0x1cf8dc=new Date(_0x21c9eb['getUTCFullYear'](),_0x21c9eb['getUTCMonth'](),_0x21c9eb['getUTCDate'](),_0x21c9eb['getUTCHours'](),_0x21c9eb['getUTCMinutes'](),_0x21c9eb['getUTCSeconds']());return Math['floor'](_0x5a87ec['wOYNO'](_0x1cf8dc['getTime'](),0x3e8));};_0x36301c['prototype']['subscribe']=function(){for(var _0x4b058c=0x0;_0x5a87ec['RRxex'](_0x4b058c,BitfinexConstant_1['BitfinexConstant']['VALIDPAIRS']['length']);_0x4b058c++){var _0x4a3f8b=_0x5a87ec['yKRsX'](_0x5a87ec['JNSOT']('{\x22event\x22:\x20\x22subscribe\x22,\x20\x22channel\x22:\x20\x22ticker\x22,\x20\x22pair\x22:\x20\x22',BitfinexConstant_1['BitfinexConstant']['VALIDPAIRS'][_0x4b058c]),'\x22}');Utilities_1['Utilities']['logger']['debug'](_0x4a3f8b);this['webSocket']['send'](_0x4a3f8b);}};_0x36301c['prototype']['chkInfoMsg']=function(_0x285810,_0x5c3e18){Utilities_1['Utilities']['logger']['info']('!!\x20Bitfinex',_0x285810,_0x5c3e18);};_0x36301c['prototype']['processMsg']=function(_0x4643a5){if(_0x5a87ec['SYGbJ'](_0x4643a5[0x1],'hb')){var _0x1ecd9f=_0x4643a5[BitfinexConstant_1['BitfinexConstant']['MSG_CHANNEL_ID']];var _0x5a282d=this['_channels'][_0x1ecd9f];if(_0x5a282d){for(var _0x5ea643=0x1;_0x5a87ec['RRxex'](_0x5ea643,_0x4643a5['length']);_0x5ea643++){this['emit'](BitfinexConstant_1['BitfinexConstant']['TICKEREVENT'],_0x5a282d,_0x4643a5[_0x5ea643]);}}}};return _0x36301c;}(EventEmiter);exports['BitfinexProxy']=BitfinexProxy;