var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var M=b(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});function Ue(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}k.toCommandValue=Ue});var Z=b(_=>{"use strict";var je=_&&_.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(_,"__esModule",{value:!0});var He=je(require("os")),z=M();function Q(e,t,r){let n=new K(e,t,r);process.stdout.write(n.toString()+He.EOL)}_.issueCommand=Q;function Xe(e,t=""){Q(e,{},t)}_.issue=Xe;var W="::",K=class{constructor(t,r,n){t||(t="missing.command"),this.command=t,this.properties=r,this.message=n}toString(){let t=W+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let r=!0;for(let n in this.properties)if(this.properties.hasOwnProperty(n)){let i=this.properties[n];i&&(r?r=!1:t+=",",t+=`${n}=${ze(i)}`)}}return t+=`${W}${Ye(this.message)}`,t}};function Ye(e){return z.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function ze(e){return z.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var te=b(w=>{"use strict";var D=w&&w.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(w,"__esModule",{value:!0});var ee=D(require("fs")),Ke=D(require("os")),Qe=M();function We(e,t){let r=process.env[`GITHUB_${e}`];if(!r)throw new Error(`Unable to find environment variable for file command ${e}`);if(!ee.existsSync(r))throw new Error(`Missing file at path: ${r}`);ee.appendFileSync(r,`${Qe.toCommandValue(t)}${Ke.EOL}`,{encoding:"utf8"})}w.issueCommand=We});var ae=b(f=>{"use strict";var Ze=f&&f.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(a){a(s)})}return new(r||(r=Promise))(function(s,a){function o(c){try{l(n.next(c))}catch(d){a(d)}}function u(c){try{l(n.throw(c))}catch(d){a(d)}}function l(c){c.done?s(c.value):i(c.value).then(o,u)}l((n=n.apply(e,t||[])).next())})},re=f&&f.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(f,"__esModule",{value:!0});var m=Z(),ne=te(),De=M(),G=re(require("os")),et=re(require("path")),se;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(se=f.ExitCode||(f.ExitCode={}));function tt(e,t){let r=De.toCommandValue(t);if(process.env[e]=r,process.env.GITHUB_ENV||""){let i="_GitHubActionsFileCommandDelimeter_",s=`${e}<<${i}${G.EOL}${r}${G.EOL}${i}`;ne.issueCommand("ENV",s)}else m.issueCommand("set-env",{name:e},r)}f.exportVariable=tt;function rt(e){m.issueCommand("add-mask",{},e)}f.setSecret=rt;function nt(e){process.env.GITHUB_PATH||""?ne.issueCommand("PATH",e):m.issueCommand("add-path",{},e),process.env.PATH=`${e}${et.delimiter}${process.env.PATH}`}f.addPath=nt;function st(e,t){let r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r)throw new Error(`Input required and not supplied: ${e}`);return r.trim()}f.getInput=st;function it(e,t){m.issueCommand("set-output",{name:e},t)}f.setOutput=it;function ot(e){m.issue("echo",e?"on":"off")}f.setCommandEcho=ot;function ut(e){process.exitCode=se.Failure,ie(e)}f.setFailed=ut;function at(){return process.env.RUNNER_DEBUG==="1"}f.isDebug=at;function ct(e){m.issueCommand("debug",{},e)}f.debug=ct;function ie(e){m.issue("error",e instanceof Error?e.toString():e)}f.error=ie;function lt(e){m.issue("warning",e instanceof Error?e.toString():e)}f.warning=lt;function ft(e){process.stdout.write(e+G.EOL)}f.info=ft;function oe(e){m.issue("group",e)}f.startGroup=oe;function ue(){m.issue("endgroup")}f.endGroup=ue;function dt(e,t){return Ze(this,void 0,void 0,function*(){oe(e);let r;try{r=yield t()}finally{ue()}return r})}f.group=dt;function ht(e,t){m.issueCommand("save-state",{name:e},t)}f.saveState=ht;function gt(e){return process.env[`STATE_${e}`]||""}f.getState=gt});var T=b(A=>{"use strict";var ce=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",pt=ce+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",le="["+ce+"]["+pt+"]*",bt=new RegExp("^"+le+"$"),Nt=function(e,t){let r=[],n=t.exec(e);for(;n;){let i=[],s=n.length;for(let a=0;a<s;a++)i.push(n[a]);r.push(i),n=t.exec(e)}return r},mt=function(e){let t=bt.exec(e);return!(t===null||typeof t=="undefined")};A.isExist=function(e){return typeof e!="undefined"};A.isEmptyObject=function(e){return Object.keys(e).length===0};A.merge=function(e,t,r){if(t){let n=Object.keys(t),i=n.length;for(let s=0;s<i;s++)r==="strict"?e[n[s]]=[t[n[s]]]:e[n[s]]=t[n[s]]}};A.getValue=function(e){return A.isExist(e)?e:""};A.buildOptions=function(e,t,r){var n={};if(!e)return t;for(let i=0;i<r.length;i++)e[r[i]]!==void 0?n[r[i]]=e[r[i]]:n[r[i]]=t[r[i]];return n};A.isTagNameInArrayMode=function(e,t,r){return t===!1?!1:t instanceof RegExp?t.test(e):typeof t=="function"?!!t(e,r):t==="strict"};A.isName=mt;A.getAllMatches=Nt;A.nameRegexp=le});var de=b(fe=>{"use strict";var E=T(),J=function(e,t,r){let n={};if((!e.child||E.isEmptyObject(e.child))&&(!e.attrsMap||E.isEmptyObject(e.attrsMap)))return E.isExist(e.val)?e.val:"";if(E.isExist(e.val)&&!(typeof e.val=="string"&&(e.val===""||e.val===t.cdataPositionChar))){let s=E.isTagNameInArrayMode(e.tagname,t.arrayMode,r);n[t.textNodeName]=s?[e.val]:e.val}E.merge(n,e.attrsMap,t.arrayMode);let i=Object.keys(e.child);for(let s=0;s<i.length;s++){let a=i[s];if(e.child[a]&&e.child[a].length>1){n[a]=[];for(let o in e.child[a])e.child[a].hasOwnProperty(o)&&n[a].push(J(e.child[a][o],t,a))}else{let o=J(e.child[a][0],t,a),u=t.arrayMode===!0&&typeof o=="object"||E.isTagNameInArrayMode(a,t.arrayMode,r);n[a]=u?[o]:o}}return n};fe.convertToJson=J});var ge=b((Tr,he)=>{"use strict";he.exports=function(e,t,r){this.tagname=e,this.parent=t,this.child={},this.attrsMap={},this.val=r,this.addChild=function(n){Array.isArray(this.child[n.tagname])?this.child[n.tagname].push(n):this.child[n.tagname]=[n]}}});var I=b(F=>{"use strict";var O=T(),At=T().buildOptions,q=ge(),vr="<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,O.nameRegexp);!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var pe={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,arrayMode:!1,trimValues:!0,cdataTagName:!1,cdataPositionChar:"\\c",tagValueProcessor:function(e,t){return e},attrValueProcessor:function(e,t){return e},stopNodes:[]};F.defaultOptions=pe;var be=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","ignoreNameSpace","allowBooleanAttributes","parseNodeValue","parseAttributeValue","arrayMode","trimValues","cdataTagName","cdataPositionChar","tagValueProcessor","attrValueProcessor","parseTrueNumberOnly","stopNodes"];F.props=be;function $(e,t,r){return t&&(r.trimValues&&(t=t.trim()),t=r.tagValueProcessor(t,e),t=Ne(t,r.parseNodeValue,r.parseTrueNumberOnly)),t}function Ct(e,t){if(t.ignoreNameSpace){let r=e.split(":"),n=e.charAt(0)==="/"?"/":"";if(r[0]==="xmlns")return"";r.length===2&&(e=n+r[1])}return e}function Ne(e,t,r){if(t&&typeof e=="string"){let n;return e.trim()===""||isNaN(e)?n=e==="true"?!0:e==="false"?!1:e:(e.indexOf("0x")!==-1?n=Number.parseInt(e,16):e.indexOf(".")!==-1?(n=Number.parseFloat(e),e=e.replace(/\.?0+$/,"")):n=Number.parseInt(e,10),r&&(n=String(n)===e?n:e)),n}else return O.isExist(e)?e:""}var yt=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])(.*?)\\3)?`,"g");function me(e,t){if(!t.ignoreAttributes&&typeof e=="string"){e=e.replace(/\r?\n/g," ");let r=O.getAllMatches(e,yt),n=r.length,i={};for(let s=0;s<n;s++){let a=Ct(r[s][1],t);a.length&&(r[s][4]!==void 0?(t.trimValues&&(r[s][4]=r[s][4].trim()),r[s][4]=t.attrValueProcessor(r[s][4],a),i[t.attributeNamePrefix+a]=Ne(r[s][4],t.parseAttributeValue,t.parseTrueNumberOnly)):t.allowBooleanAttributes&&(i[t.attributeNamePrefix+a]=!0))}if(!Object.keys(i).length)return;if(t.attrNodeName){let s={};return s[t.attrNodeName]=i,s}return i}}var vt=function(e,t){e=e.replace(/\r\n?/g,`
`),t=At(t,pe,be);let r=new q("!xml"),n=r,i="";for(let s=0;s<e.length;s++)if(e[s]==="<")if(e[s+1]==="/"){let o=P(e,">",s,"Closing Tag is not closed."),u=e.substring(s+2,o).trim();if(t.ignoreNameSpace){let l=u.indexOf(":");l!==-1&&(u=u.substr(l+1))}n&&(n.val?n.val=O.getValue(n.val)+""+$(u,i,t):n.val=$(u,i,t)),t.stopNodes.length&&t.stopNodes.includes(n.tagname)&&(n.child=[],n.attrsMap==null&&(n.attrsMap={}),n.val=e.substr(n.startIndex+1,s-n.startIndex-1)),n=n.parent,i="",s=o}else if(e[s+1]==="?")s=P(e,"?>",s,"Pi Tag is not closed.");else if(e.substr(s+1,3)==="!--")s=P(e,"-->",s,"Comment is not closed.");else if(e.substr(s+1,2)==="!D"){let o=P(e,">",s,"DOCTYPE is not closed.");e.substring(s,o).indexOf("[")>=0?s=e.indexOf("]>",s)+1:s=o}else if(e.substr(s+1,2)==="!["){let o=P(e,"]]>",s,"CDATA is not closed.")-2,u=e.substring(s+9,o);if(i&&(n.val=O.getValue(n.val)+""+$(n.tagname,i,t),i=""),t.cdataTagName){let l=new q(t.cdataTagName,n,u);n.addChild(l),n.val=O.getValue(n.val)+t.cdataPositionChar,u&&(l.val=u)}else n.val=(n.val||"")+(u||"");s=o+2}else{let o=Tt(e,s+1),u=o.data,l=o.index,c=u.indexOf(" "),d=u,Y=!0;if(c!==-1&&(d=u.substr(0,c).replace(/\s\s*$/,""),u=u.substr(c+1)),t.ignoreNameSpace){let N=d.indexOf(":");N!==-1&&(d=d.substr(N+1),Y=d!==o.data.substr(N+1))}if(n&&i&&n.tagname!=="!xml"&&(n.val=O.getValue(n.val)+""+$(n.tagname,i,t)),u.length>0&&u.lastIndexOf("/")===u.length-1){d[d.length-1]==="/"?(d=d.substr(0,d.length-1),u=d):u=u.substr(0,u.length-1);let N=new q(d,n,"");d!==u&&(N.attrsMap=me(u,t)),n.addChild(N)}else{let N=new q(d,n);t.stopNodes.length&&t.stopNodes.includes(N.tagname)&&(N.startIndex=l),d!==u&&Y&&(N.attrsMap=me(u,t)),n.addChild(N),n=N}i="",s=l}else i+=e[s];return r};function Tt(e,t){let r,n="";for(let i=t;i<e.length;i++){let s=e[i];if(r)s===r&&(r="");else if(s==='"'||s==="'")r=s;else{if(s===">")return{data:n,index:i};s==="	"&&(s=" ")}n+=s}}function P(e,t,r,n){let i=e.indexOf(t,r);if(i===-1)throw new Error(n);return i+t.length-1}F.getTraversalObj=vt});var ve=b(Ae=>{"use strict";var R=T(),Et={allowBooleanAttributes:!1},Ot=["allowBooleanAttributes"];Ae.validate=function(e,t){t=R.buildOptions(t,Et,Ot);let r=[],n=!1,i=!1;e[0]==="\uFEFF"&&(e=e.substr(1));for(let s=0;s<e.length;s++)if(e[s]==="<"&&e[s+1]==="?"){if(s+=2,s=Ce(e,s),s.err)return s}else if(e[s]==="<")if(s++,e[s]==="!"){s=ye(e,s);continue}else{let a=!1;e[s]==="/"&&(a=!0,s++);let o="";for(;s<e.length&&e[s]!==">"&&e[s]!==" "&&e[s]!=="	"&&e[s]!==`
`&&e[s]!=="\r";s++)o+=e[s];if(o=o.trim(),o[o.length-1]==="/"&&(o=o.substring(0,o.length-1),s--),!Pt(o)){let c;return o.trim().length===0?c="There is an unnecessary space between tag name and backward slash '</ ..'.":c="Tag '"+o+"' is an invalid name.",g("InvalidTag",c,C(e,s))}let u=_t(e,s);if(u===!1)return g("InvalidAttr","Attributes for '"+o+"' have open quote.",C(e,s));let l=u.value;if(s=u.index,l[l.length-1]==="/"){l=l.substring(0,l.length-1);let c=Te(l,t);if(c===!0)n=!0;else return g(c.err.code,c.err.msg,C(e,s-l.length+c.err.line))}else if(a)if(u.tagClosed){if(l.trim().length>0)return g("InvalidTag","Closing tag '"+o+"' can't have attributes or invalid starting.",C(e,s));{let c=r.pop();if(o!==c)return g("InvalidTag","Closing tag '"+c+"' is expected inplace of '"+o+"'.",C(e,s));r.length==0&&(i=!0)}}else return g("InvalidTag","Closing tag '"+o+"' doesn't have proper closing.",C(e,s));else{let c=Te(l,t);if(c!==!0)return g(c.err.code,c.err.msg,C(e,s-l.length+c.err.line));if(i===!0)return g("InvalidXml","Multiple possible root nodes found.",C(e,s));r.push(o),n=!0}for(s++;s<e.length;s++)if(e[s]==="<")if(e[s+1]==="!"){s++,s=ye(e,s);continue}else if(e[s+1]==="?"){if(s=Ce(e,++s),s.err)return s}else break;else if(e[s]==="&"){let c=wt(e,s);if(c==-1)return g("InvalidChar","char '&' is not expected.",C(e,s));s=c}e[s]==="<"&&s--}else{if(e[s]===" "||e[s]==="	"||e[s]===`
`||e[s]==="\r")continue;return g("InvalidChar","char '"+e[s]+"' is not expected.",C(e,s))}if(n){if(r.length>0)return g("InvalidXml","Invalid '"+JSON.stringify(r,null,4).replace(/\r?\n/g,"")+"' found.",1)}else return g("InvalidXml","Start tag expected.",1);return!0};function Ce(e,t){for(var r=t;t<e.length;t++)if(e[t]=="?"||e[t]==" "){var n=e.substr(r,t-r);if(t>5&&n==="xml")return g("InvalidXml","XML declaration allowed only at the start of the document.",C(e,t));if(e[t]=="?"&&e[t+1]==">"){t++;break}else continue}return t}function ye(e,t){if(e.length>t+5&&e[t+1]==="-"&&e[t+2]==="-"){for(t+=3;t<e.length;t++)if(e[t]==="-"&&e[t+1]==="-"&&e[t+2]===">"){t+=2;break}}else if(e.length>t+8&&e[t+1]==="D"&&e[t+2]==="O"&&e[t+3]==="C"&&e[t+4]==="T"&&e[t+5]==="Y"&&e[t+6]==="P"&&e[t+7]==="E"){let r=1;for(t+=8;t<e.length;t++)if(e[t]==="<")r++;else if(e[t]===">"&&(r--,r===0))break}else if(e.length>t+9&&e[t+1]==="["&&e[t+2]==="C"&&e[t+3]==="D"&&e[t+4]==="A"&&e[t+5]==="T"&&e[t+6]==="A"&&e[t+7]==="["){for(t+=8;t<e.length;t++)if(e[t]==="]"&&e[t+1]==="]"&&e[t+2]===">"){t+=2;break}}return t}var It='"',St="'";function _t(e,t){let r="",n="",i=!1;for(;t<e.length;t++){if(e[t]===It||e[t]===St)if(n==="")n=e[t];else{if(n!==e[t])continue;n=""}else if(e[t]===">"&&n===""){i=!0;break}r+=e[t]}return n!==""?!1:{value:r,index:t,tagClosed:i}}var Vt=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function Te(e,t){let r=R.getAllMatches(e,Vt),n={};for(let i=0;i<r.length;i++){if(r[i][1].length===0)return g("InvalidAttr","Attribute '"+r[i][2]+"' has no space in starting.",L(e,r[i][0]));if(r[i][3]===void 0&&!t.allowBooleanAttributes)return g("InvalidAttr","boolean attribute '"+r[i][2]+"' is not allowed.",L(e,r[i][0]));let s=r[i][2];if(!Mt(s))return g("InvalidAttr","Attribute '"+s+"' is an invalid name.",L(e,r[i][0]));if(!n.hasOwnProperty(s))n[s]=1;else return g("InvalidAttr","Attribute '"+s+"' is repeated.",L(e,r[i][0]))}return!0}function Ft(e,t){let r=/\d/;for(e[t]==="x"&&(t++,r=/[\da-fA-F]/);t<e.length;t++){if(e[t]===";")return t;if(!e[t].match(r))break}return-1}function wt(e,t){if(t++,e[t]===";")return-1;if(e[t]==="#")return t++,Ft(e,t);let r=0;for(;t<e.length;t++,r++)if(!(e[t].match(/\w/)&&r<20)){if(e[t]===";")break;return-1}return t}function g(e,t,r){return{err:{code:e,msg:t,line:r}}}function Mt(e){return R.isName(e)}function Pt(e){return R.isName(e)}function C(e,t){var r=e.substring(0,t).split(/\r?\n/);return r.length}function L(e,t){return e.indexOf(t)+t.length}});var we=b(Ee=>{"use strict";var v=function(e){return String.fromCharCode(e)},h={nilChar:v(176),missingChar:v(201),nilPremitive:v(175),missingPremitive:v(200),emptyChar:v(178),emptyValue:v(177),boundryChar:v(179),objStart:v(198),arrStart:v(204),arrayEnd:v(185)},qt=[h.nilChar,h.nilPremitive,h.missingChar,h.missingPremitive,h.boundryChar,h.emptyChar,h.emptyValue,h.arrayEnd,h.objStart,h.arrStart],S=function(e,t,r){if(typeof t=="string")return e&&e[0]&&e[0].val!==void 0?U(e[0].val,t):U(e,t);{let n=$t(e);if(n===!0){let i="";if(Array.isArray(t)){i+=h.arrStart;let s=t[0],a=e.length;if(typeof s=="string")for(let o=0;o<a;o++){let u=U(e[o].val,s);i=j(i,u)}else for(let o=0;o<a;o++){let u=S(e[o],s,r);i=j(i,u)}i+=h.arrayEnd}else{i+=h.objStart;let s=Object.keys(t);Array.isArray(e)&&(e=e[0]);for(let a in s){let o=s[a],u;!r.ignoreAttributes&&e.attrsMap&&e.attrsMap[o]?u=S(e.attrsMap[o],t[o],r):o===r.textNodeName?u=S(e.val,t[o],r):u=S(e.child[o],t[o],r),i=j(i,u)}}return i}else return n}},U=function(e){switch(e){case void 0:return h.missingPremitive;case null:return h.nilPremitive;case"":return h.emptyValue;default:return e}},j=function(e,t){return!Oe(t[0])&&!Oe(e[e.length-1])&&(e+=h.boundryChar),e+t},Oe=function(e){return qt.indexOf(e)!==-1};function $t(e){return e===void 0?h.missingChar:e===null?h.nilChar:e.child&&Object.keys(e.child).length===0&&(!e.attrsMap||Object.keys(e.attrsMap).length===0)?h.emptyChar:!0}var _e=I(),Rt=T().buildOptions,Lt=function(e,t,r){return r=Rt(r,_e.defaultOptions,_e.props),S(e,t,r)};Ee.convert2nimn=Lt});var Se=b(Pe=>{"use strict";var x=T(),xt=T().buildOptions,Ie=I(),Bt=function(e,t){return t=xt(t,Ie.defaultOptions,Ie.props),t.indentBy=t.indentBy||"",H(e,t,0)},H=function(e,t,r){let n="{",i=Object.keys(e.child);for(let o=0;o<i.length;o++){var s=i[o];if(e.child[s]&&e.child[s].length>1){n+='"'+s+'" : [ ';for(var a in e.child[s])n+=H(e.child[s][a],t)+" , ";n=n.substr(0,n.length-1)+" ] "}else n+='"'+s+'" : '+H(e.child[s][0],t)+" ,"}return x.merge(n,e.attrsMap),x.isEmptyObject(n)?x.isExist(e.val)?e.val:"":(x.isExist(e.val)&&(typeof e.val=="string"&&(e.val===""||e.val===t.cdataPositionChar)||(n+='"'+t.textNodeName+'" : '+kt(e.val))),n[n.length-1]===","&&(n=n.substr(0,n.length-2)),n+"}")};function kt(e){return e===!0||e===!1||!isNaN(e)?e:'"'+e+'"'}Pe.convertToJsonString=Bt});var qe=b((Pr,Ve)=>{"use strict";var Gt=T().buildOptions,Jt={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataTagName:!1,cdataPositionChar:"\\c",format:!1,indentBy:"  ",supressEmptyNode:!1,tagValueProcessor:function(e){return e},attrValueProcessor:function(e){return e}},Ut=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","cdataTagName","cdataPositionChar","format","indentBy","supressEmptyNode","tagValueProcessor","attrValueProcessor"];function X(e){this.options=Gt(e,Jt,Ut),this.options.ignoreAttributes||this.options.attrNodeName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Kt),this.options.cdataTagName?this.isCDATA=Qt:this.isCDATA=function(){return!1},this.replaceCDATAstr=jt,this.replaceCDATAarr=Ht,this.options.format?(this.indentate=zt,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.supressEmptyNode?(this.buildTextNode=Yt,this.buildObjNode=Xt):(this.buildTextNode=Fe,this.buildObjNode=Me),this.buildTextValNode=Fe,this.buildObjectNode=Me}X.prototype.parse=function(e){return this.j2x(e,0).val};X.prototype.j2x=function(e,t){let r="",n="",i=Object.keys(e),s=i.length;for(let a=0;a<s;a++){let o=i[a];if(typeof e[o]!="undefined")if(e[o]===null)n+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if(e[o]instanceof Date)n+=this.buildTextNode(e[o],o,"",t);else if(typeof e[o]!="object"){let u=this.isAttribute(o);u?r+=" "+u+'="'+this.options.attrValueProcessor(""+e[o])+'"':this.isCDATA(o)?e[this.options.textNodeName]?n+=this.replaceCDATAstr(e[this.options.textNodeName],e[o]):n+=this.replaceCDATAstr("",e[o]):o===this.options.textNodeName?e[this.options.cdataTagName]||(n+=this.options.tagValueProcessor(""+e[o])):n+=this.buildTextNode(e[o],o,"",t)}else if(Array.isArray(e[o]))if(this.isCDATA(o))n+=this.indentate(t),e[this.options.textNodeName]?n+=this.replaceCDATAarr(e[this.options.textNodeName],e[o]):n+=this.replaceCDATAarr("",e[o]);else{let u=e[o].length;for(let l=0;l<u;l++){let c=e[o][l];if(typeof c!="undefined")if(c===null)n+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if(typeof c=="object"){let d=this.j2x(c,t+1);n+=this.buildObjNode(d.val,o,d.attrStr,t)}else n+=this.buildTextNode(c,o,"",t)}}else if(this.options.attrNodeName&&o===this.options.attrNodeName){let u=Object.keys(e[o]),l=u.length;for(let c=0;c<l;c++)r+=" "+u[c]+'="'+this.options.attrValueProcessor(""+e[o][u[c]])+'"'}else{let u=this.j2x(e[o],t+1);n+=this.buildObjNode(u.val,o,u.attrStr,t)}}return{attrStr:r,val:n}};function jt(e,t){return e=this.options.tagValueProcessor(""+e),this.options.cdataPositionChar===""||e===""?e+"<![CDATA["+t+"]]"+this.tagEndChar:e.replace(this.options.cdataPositionChar,"<![CDATA["+t+"]]"+this.tagEndChar)}function Ht(e,t){if(e=this.options.tagValueProcessor(""+e),this.options.cdataPositionChar===""||e==="")return e+"<![CDATA["+t.join("]]><![CDATA[")+"]]"+this.tagEndChar;for(let r in t)e=e.replace(this.options.cdataPositionChar,"<![CDATA["+t[r]+"]]>");return e+this.newLine}function Me(e,t,r,n){return r&&!e.includes("<")?this.indentate(n)+"<"+t+r+">"+e+"</"+t+this.tagEndChar:this.indentate(n)+"<"+t+r+this.tagEndChar+e+this.indentate(n)+"</"+t+this.tagEndChar}function Xt(e,t,r,n){return e!==""?this.buildObjectNode(e,t,r,n):this.indentate(n)+"<"+t+r+"/"+this.tagEndChar}function Fe(e,t,r,n){return this.indentate(n)+"<"+t+r+">"+this.options.tagValueProcessor(e)+"</"+t+this.tagEndChar}function Yt(e,t,r,n){return e!==""?this.buildTextValNode(e,t,r,n):this.indentate(n)+"<"+t+r+"/"+this.tagEndChar}function zt(e){return this.options.indentBy.repeat(e)}function Kt(e){return e.startsWith(this.options.attributeNamePrefix)?e.substr(this.attrPrefixLen):!1}function Qt(e){return e===this.options.cdataTagName}Ve.exports=X});var Be=b(y=>{"use strict";var $e=de(),Re=I(),Le=I(),Wt=T().buildOptions,xe=ve();y.parse=function(e,t,r){if(r){r===!0&&(r={});let i=xe.validate(e,r);if(i!==!0)throw Error(i.err.msg)}t=Wt(t,Le.defaultOptions,Le.props);let n=Re.getTraversalObj(e,t);return $e.convertToJson(n,t)};y.convertTonimn=we().convert2nimn;y.getTraversalObj=Re.getTraversalObj;y.convertToJson=$e.convertToJson;y.convertToJsonString=Se().convertToJsonString;y.validate=xe.validate;y.j2xParser=qe();y.parseToNimn=function(e,t,r){return y.convertTonimn(y.getTraversalObj(e,r),t,r)}});var Ge=b((Sr,ke)=>{var{spawn:Zt}=require("child_process"),Dt=(e,t=[],r={})=>new Promise((n,i)=>{let s="",a={...r};a.stdio||Object.assign(a,{stdio:["inherit","inherit","inherit"]});let o=Zt(e,t,a);o.stdout&&o.stdout.on("data",function(u){s+=u.toString()}),o.on("close",u=>u!==0?i({code:u,outputData:s}):n({code:u,outputData:s})),o.on("error",()=>i({code:1,outputData:s}))});ke.exports=Dt});var er=require("https"),Je=require("fs"),p=ae(),tr=Be(),V=Ge(),rr=p.getInput("goodreads_user_id"),nr=p.getInput("shelf"),sr=Number.parseInt(p.getInput("max_books_count")),B=p.getInput("readme_file_path"),ir=p.getInput("output_only").toLowerCase()==="true",or=p.getInput("template")||"- [$title]($url) by $author (\u2B50\uFE0F$average_rating)",ur="Synced and updated with user's goodreads book lists",ar="goodreads-books-bot",cr="goodreads-books-bot@example.com";lr(rr,nr).then(async e=>{try{if(!e.rss.channel.item)return;let r=(Array.isArray(e.rss.channel.item)?e.rss.channel.item:[e.rss.channel.item]).slice(0,sr),n=Je.readFileSync(B,"utf8"),i=fr(n,r);n!==i&&(p.info(`Writing to ${B}`),p.startGroup("New books found for update"),r.forEach(s=>p.info(JSON.stringify(s))),p.endGroup(),Je.writeFileSync(B,i),ir?(p.setOutput("books",r),p.info("OUTPUT_ONLY: set `results` variable. Readme not committed.")):await dr())}catch(t){p.error(t),process.exit(1)}}).then(()=>{process.exit(0)}).catch(e=>{p.error(e),process.exit(1)});function lr(e,t){return console.log("shelf",t),new Promise((r,n)=>{er.request({host:"www.goodreads.com",path:`/review/list_rss/${e}?shelf=${t}`},i=>{let s="";i.on("data",a=>s+=a),i.on("end",()=>r(tr.parse(s))),i.on("error",a=>n(a))}).end()})}function fr(e,t){let r=p.getInput("comment_tag_name")||"GOODREADS-LIST",n=`<!-- ${r}:START -->`,i=`<!-- ${r}:END -->`;if(![n,i].every(a=>e.match(new RegExp(a,"gm"))))p.error(`Cannot find the required comment tags (${n} and ${i}) to inject book titles.`),process.exit(1);else{let a=e.indexOf(n),o=e.indexOf(i),u=hr(t);return[e.substring(0,a+n.length),`
`,u,`
`,e.substring(o)].join("")}}function hr(e){return e.map(t=>gr(or,{title:t.title,url:t.link,author:t.author_name,published_year:t.book_published,average_rating:t.average_rating,my_rating:t.user_rating,my_rating_stars:t.user_rating?"\u2B50".repeat(Number.parseInt(t.user_rating||"0")):"unrated"})).join(`
`)}function gr(e,t){let r=/\$([a-zA-Z_]*)/g;return e.replace(r,(n,i)=>t[i]||"")}async function dr(){await V("git",["config","--global","user.email",cr]),await V("git",["config","--global","user.name",ar]),await V("git",["add",B]),await V("git",["commit","-m",ur]),await V("git",["push"]),p.info("Readme updated successfully in the upstream repository"),process.exit(0)}
