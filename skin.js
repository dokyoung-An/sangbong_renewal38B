// Garden Gnome Software - Skin
// Pano2VR 7.0.10/20025
// Filename: ??? ??? 38A.ggsk
// Generated 2024-04-26T16:30:52

function pano2vrSkin(player,base) {
	player.addVariable('vis_roomchoice', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_short', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skin_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_long', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemap', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_footprint', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 1, defaultValue: false } });
	player.addVariable('vis_footprint_no', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 0, defaultValue: false } });
	player.addVariable('vis_direction', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_tag', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sound', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mapangle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_onefloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_secondfloor', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__58=document.createElement('div');
		el.ggId="\uc2a4\ud0a8 \ubcf4\uc774\uae30 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__58.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
			me.__.ggVisible=true;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__54.style.transition='none';
				me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
				me.__54.ggVisible=true;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me.__4.style.transition='none';
			me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
			me.__4.ggVisible=true;
			me.__8.style.transition='none';
			me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
			me.__8.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__58.style.transition='none';
			me.__58.style.visibility='hidden';
			me.__58.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__51.style.transition='none';
				me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
				me.__51.ggVisible=true;
			}
		}
		me.__58.onmouseover=function (e) {
			me.elementMouseOver['_58']=true;
		}
		me.__58.onmousemove=function (e) {
			me.__60.style.transition='none';
			me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
			me.__60.ggVisible=true;
		}
		me.__58.onmouseout=function (e) {
			me.elementMouseOver['_58']=false;
		}
		me.__58.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_58']) {
				me.__60.style.transition='none';
				me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
				me.__60.ggVisible=true;
			}
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me.__62);
		el=me.__61=document.createElement('div');
		els=me.__61__img=document.createElement('img');
		els.className='ggskin ggskin__61';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me.__61);
		el=me.__60=document.createElement('div');
		els=me.__60__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30 \ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__60.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__60.ggUpdateText();
		el.appendChild(els);
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me.__60);
		el=me.__59=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -508px;';
		hs+='position : absolute;';
		hs+='top : 234px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			return (me.__59.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__59.ggTimestamp) / me.__59.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__59.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__59.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__59.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__59.style.transition='';
				if (me.__59.ggCurrentLogicStateVisible == 0) {
					me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
					me.__59.ggVisible=true;
				}
				else {
					me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
					me.__59.ggVisible=true;
				}
			}
		}
		me.__59.logicBlock_visible();
		me.__59.ggActivate=function () {
			me.__60.style.transition='none';
			me.__60.style.visibility='hidden';
			me.__60.ggVisible=false;
		}
		me.__59.ggCurrentLogicStateVisible = -1;
		me.__59.ggUpdateConditionTimer=function () {
			me.__59.logicBlock_visible();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me.__59);
		me.divSkin.appendChild(me.__58);
		el=me.__54=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__54.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__54.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__54.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__54.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__54.ggCurrentLogicStatePosition == 0) {
					me.__54.style.left='10px';
					me.__54.style.top='45px';
				}
				else {
					me.__54.style.left='15px';
					me.__54.style.top='80px';
				}
			}
		}
		me.__54.logicBlock_position();
		me.__54.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__54.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__54.ggCurrentLogicStateSize = newLogicStateSize;
				me.__54.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__54.ggCurrentLogicStateSize == 0) {
					me.__54.style.width='110px';
					me.__54.style.height='100px';
					skin.updateSize(me.__54);
				}
				else if (me.__54.ggCurrentLogicStateSize == 1) {
					me.__54.style.width='200px';
					me.__54.style.height='200px';
					skin.updateSize(me.__54);
				}
				else {
					me.__54.style.width='200px';
					me.__54.style.height='200px';
					skin.updateSize(me.__54);
				}
			}
		}
		me.__54.logicBlock_size();
		me.__54.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__54.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__54.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__54.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__54.ggCurrentLogicStateScaling == 0) {
					me.__54.ggParameter.sx = 0.85;
					me.__54.ggParameter.sy = 0.8;
					me.__54.style.transform=parameterToTransform(me.__54.ggParameter);
					skin.updateSize(me.__54);
				}
				else {
					me.__54.ggParameter.sx = 1;
					me.__54.ggParameter.sy = 1;
					me.__54.style.transform=parameterToTransform(me.__54.ggParameter);
					skin.updateSize(me.__54);
				}
			}
		}
		me.__54.logicBlock_scaling();
		me.__54.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
				else if (me.__54.ggCurrentLogicStateVisible == 1) {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
				else if (me.__54.ggCurrentLogicStateVisible == 2) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else if (me.__54.ggCurrentLogicStateVisible == 3) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.onclick=function (e) {
			me.__48.style.transition='none';
			me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
			me.__48.ggVisible=true;
			me.__54.style.transition='none';
			me.__54.style.visibility='hidden';
			me.__54.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_41.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_41.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_41.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_41.style.transition='width 0s, height 0s';
				if (me._rectangle_41.ggCurrentLogicStateSize == 0) {
					me._rectangle_41.style.width='65px';
					me._rectangle_41.style.height='30px';
					me._rectangle_41.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_41);
				}
				else {
					me._rectangle_41.style.width='100px';
					me._rectangle_41.style.height='40px';
					me._rectangle_41.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_41);
				}
			}
		}
		me._rectangle_41.logicBlock_size();
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		els=me.__57__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__57.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__57.ggUpdateText();
		el.appendChild(els);
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__57.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__57.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__57.style.transition='transform 0s';
				if (me.__57.ggCurrentLogicStateScaling == 0) {
					me.__57.ggParameter.sx = 0.7;
					me.__57.ggParameter.sy = 0.7;
					me.__57.style.transform=parameterToTransform(me.__57.ggParameter);
					skin.updateSize(me.__57);
				}
				else {
					me.__57.ggParameter.sx = 1;
					me.__57.ggParameter.sy = 1;
					me.__57.style.transform=parameterToTransform(me.__57.ggParameter);
					skin.updateSize(me.__57);
				}
			}
		}
		me.__57.logicBlock_scaling();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me.__57);
		me.__55.appendChild(me._rectangle_41);
		el=me._map_11=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) - 10px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_11.style.transition='';
				if (me._map_11.ggCurrentLogicStateVisible == 0) {
					me._map_11.style.visibility=(Number(me._map_11.style.opacity)>0||!me._map_11.style.opacity)?'inherit':'hidden';
					if (me._map_11.ggMapNotLoaded && me._map_11.ggInitMap) {
						me._map_11.ggInitMap(false);
						me._map_11.ggInitMapMarkers(true);
					}
					me._map_11.ggVisible=true;
				}
				else {
					me._map_11.style.visibility="hidden";
					if (me._map_11.ggClearMap) me._map_11.ggClearMap();
					me._map_11.ggVisible=false;
				}
			}
		}
		me._map_11.logicBlock_visible();
		me._map_11.ggCurrentLogicStateVisible = -1;
		me._map_11.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
		}
		me._map_11.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_11.ggUpdateConditionResize();
		}
		me.__55.appendChild(me._map_11);
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud06c\uac8c\ubcf4\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(119,119,119,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 20px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__56.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		el.appendChild(els);
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__56);
		el=me._map_21=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) - 10px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_21.style.transition='';
				if (me._map_21.ggCurrentLogicStateVisible == 0) {
					me._map_21.style.visibility=(Number(me._map_21.style.opacity)>0||!me._map_21.style.opacity)?'inherit':'hidden';
					if (me._map_21.ggMapNotLoaded && me._map_21.ggInitMap) {
						me._map_21.ggInitMap(false);
						me._map_21.ggInitMapMarkers(true);
					}
					me._map_21.ggVisible=true;
				}
				else {
					me._map_21.style.visibility="hidden";
					if (me._map_21.ggClearMap) me._map_21.ggClearMap();
					me._map_21.ggVisible=false;
				}
			}
		}
		me._map_21.logicBlock_visible();
		me._map_21.ggCurrentLogicStateVisible = -1;
		me._map_21.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_21.ggCalculateFloorplanSize(mapDetails);
				me._map_21.ggShowSimpleFloorplan(mapDetails);
				me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_21.ggRadar) me._map_21.ggRadar.update();
		}
		me._map_21.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_21.ggUpdateConditionResize();
		}
		me.__55.appendChild(me._map_21);
		me.__54.appendChild(me.__55);
		me.divSkin.appendChild(me.__54);
		el=me.__51=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 125px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__51.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__51.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__51.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__51.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__51.ggCurrentLogicStatePosition == 0) {
					me.__51.style.left='5px';
					me.__51.style.bottom='-120px';
				}
				else {
					me.__51.style.left='5px';
					me.__51.style.bottom='0px';
				}
			}
		}
		me.__51.logicBlock_position();
		me.__51.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__51.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__51.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__51.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__51.ggCurrentLogicStateVisible == 0) {
					me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
					me.__51.ggVisible=true;
				}
				else if (me.__51.ggCurrentLogicStateVisible == 1) {
					me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
					me.__51.ggVisible=true;
				}
				else if (me.__51.ggCurrentLogicStateVisible == 2) {
					me.__51.style.visibility="hidden";
					me.__51.ggVisible=false;
				}
				else if (me.__51.ggCurrentLogicStateVisible == 3) {
					me.__51.style.visibility="hidden";
					me.__51.ggVisible=false;
				}
				else {
					me.__51.style.visibility="hidden";
					me.__51.ggVisible=false;
				}
			}
		}
		me.__51.logicBlock_visible();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__52=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.onclick=function (e) {
			me.__48.style.transition='none';
			me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
			me.__48.ggVisible=true;
			me.__51.style.transition='none';
			me.__51.style.visibility='hidden';
			me.__51.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_40.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_40.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_40.style.transition='width 0s, height 0s';
				if (me._rectangle_40.ggCurrentLogicStateSize == 0) {
					me._rectangle_40.style.width='65px';
					me._rectangle_40.style.height='30px';
					me._rectangle_40.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_40);
				}
				else {
					me._rectangle_40.style.width='100px';
					me._rectangle_40.style.height='40px';
					me._rectangle_40.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_40);
				}
			}
		}
		me._rectangle_40.logicBlock_size();
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		els=me.__53__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__53.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__53.ggUpdateText();
		el.appendChild(els);
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__53.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__53.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__53.style.transition='transform 0s';
				if (me.__53.ggCurrentLogicStateScaling == 0) {
					me.__53.ggParameter.sx = 0.7;
					me.__53.ggParameter.sy = 0.7;
					me.__53.style.transform=parameterToTransform(me.__53.ggParameter);
					skin.updateSize(me.__53);
				}
				else {
					me.__53.ggParameter.sx = 1;
					me.__53.ggParameter.sy = 1;
					me.__53.style.transform=parameterToTransform(me.__53.ggParameter);
					skin.updateSize(me.__53);
				}
			}
		}
		me.__53.logicBlock_scaling();
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me.__53);
		me.__52.appendChild(me._rectangle_40);
		el=me._map_10=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.661%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.661% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_10.style.transition='';
				if (me._map_10.ggCurrentLogicStateVisible == 0) {
					me._map_10.style.visibility=(Number(me._map_10.style.opacity)>0||!me._map_10.style.opacity)?'inherit':'hidden';
					if (me._map_10.ggMapNotLoaded && me._map_10.ggInitMap) {
						me._map_10.ggInitMap(false);
						me._map_10.ggInitMapMarkers(true);
					}
					me._map_10.ggVisible=true;
				}
				else {
					me._map_10.style.visibility="hidden";
					if (me._map_10.ggClearMap) me._map_10.ggClearMap();
					me._map_10.ggVisible=false;
				}
			}
		}
		me._map_10.logicBlock_visible();
		me._map_10.ggCurrentLogicStateVisible = -1;
		me._map_10.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
		}
		me._map_10.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_10.ggUpdateConditionResize();
		}
		me.__52.appendChild(me._map_10);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 2px;';
		hs+='color : rgba(119,119,119,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me._text_4);
		el=me._map_20=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.661%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.661% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_20.style.transition='';
				if (me._map_20.ggCurrentLogicStateVisible == 0) {
					me._map_20.style.visibility=(Number(me._map_20.style.opacity)>0||!me._map_20.style.opacity)?'inherit':'hidden';
					if (me._map_20.ggMapNotLoaded && me._map_20.ggInitMap) {
						me._map_20.ggInitMap(false);
						me._map_20.ggInitMapMarkers(true);
					}
					me._map_20.ggVisible=true;
				}
				else {
					me._map_20.style.visibility="hidden";
					if (me._map_20.ggClearMap) me._map_20.ggClearMap();
					me._map_20.ggVisible=false;
				}
			}
		}
		me._map_20.logicBlock_visible();
		me._map_20.ggCurrentLogicStateVisible = -1;
		me._map_20.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
		}
		me._map_20.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_20.ggUpdateConditionResize();
		}
		me.__52.appendChild(me._map_20);
		me.__51.appendChild(me.__52);
		me.divSkin.appendChild(me.__51);
		el=me._start=document.createElement('div');
		el.ggId="start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 326px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._start);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__48=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__48.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__48.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__48.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__48.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__48.ggCurrentLogicStatePosition == 0) {
					me.__48.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 5px)';
					me.__48.style.top = 'calc(50% - (70% / 2) + (0px / 2) + -120px)';
				}
				else {
					me.__48.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__48.style.top='calc(50% - ((70% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__48.logicBlock_position();
		me.__48.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 960))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__48.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__48.ggCurrentLogicStateSize = newLogicStateSize;
				me.__48.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__48.ggCurrentLogicStateSize == 0) {
					me.__48.style.width='100%';
					me.__48.style.height='100%';
					me.__48.style.left = 'calc(50% - (100% / 2))';
					me.__48.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__48);
				}
				else {
					me.__48.style.width='100%';
					me.__48.style.height='70%';
					me.__48.style.left = 'calc(50% - (100% / 2))';
					me.__48.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__48);
				}
			}
		}
		me.__48.logicBlock_size();
		me.__48.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__48.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__48.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__48.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__48.ggCurrentLogicStateScaling == 0) {
					me.__48.ggParameter.sx = 1;
					me.__48.ggParameter.sy = 0.8;
					me.__48.style.transform=parameterToTransform(me.__48.ggParameter);
					skin.updateSize(me.__48);
				}
				else {
					me.__48.ggParameter.sx = 1;
					me.__48.ggParameter.sy = 1;
					me.__48.style.transform=parameterToTransform(me.__48.ggParameter);
					skin.updateSize(me.__48);
				}
			}
		}
		me.__48.logicBlock_scaling();
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) - 32px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__49.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__49.ggCurrentLogicStateSize = newLogicStateSize;
				me.__49.style.transition='width 0s, height 0s';
				if (me.__49.ggCurrentLogicStateSize == 0) {
					me.__49.style.width='100%';
					me.__49.style.height='100%';
					me.__49.style.left = 'calc(50% - (100% / 2) + (0px / 2) + -32px)';
					skin.updateSize(me.__49);
				}
				else {
					me.__49.style.width='90%';
					me.__49.style.height='100%';
					me.__49.style.left = 'calc(50% - (90% / 2) + (0px / 2) + -32px)';
					skin.updateSize(me.__49);
				}
			}
		}
		me.__49.logicBlock_size();
		me.__49.onclick=function (e) {
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 960))
				)
			) {
				me.__51.style.transition='none';
				me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
				me.__51.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width > 960))
				)
			) {
				me.__54.style.transition='none';
				me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
				me.__54.ggVisible=true;
			}
			player.setVariableValue('vis_mapangle', false);
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		els=me.__50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__50.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__50.ggUpdateText();
		el.appendChild(els);
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__50.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__50.ggCurrentLogicStateSize = newLogicStateSize;
				me.__50.style.transition='width 0s, height 0s';
				if (me.__50.ggCurrentLogicStateSize == 0) {
					me.__50.style.width='90%';
					me.__50.style.height='100%';
					me.__50.style.left = 'calc(50% - (90% / 2))';
					me.__50.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__50);
				}
				else {
					me.__50.style.width='100%';
					me.__50.style.height='100%';
					me.__50.style.left = 'calc(50% - (100% / 2))';
					me.__50.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__50);
				}
			}
		}
		me.__50.logicBlock_size();
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__50);
		me.__49.appendChild(me._rectangle_4);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 89.2857%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((89.2857% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style.transition='';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
				else {
					me._map_1.style.visibility="hidden";
					if (me._map_1.ggClearMap) me._map_1.ggClearMap();
					me._map_1.ggVisible=false;
				}
			}
		}
		me._map_1.logicBlock_visible();
		me._map_1.ggCurrentLogicStateVisible = -1;
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me.__49.appendChild(me._map_1);
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 99.3549%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((99.3549% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_2.style.transition='';
				if (me._map_2.ggCurrentLogicStateVisible == 0) {
					me._map_2.style.visibility=(Number(me._map_2.style.opacity)>0||!me._map_2.style.opacity)?'inherit':'hidden';
					if (me._map_2.ggMapNotLoaded && me._map_2.ggInitMap) {
						me._map_2.ggInitMap(false);
						me._map_2.ggInitMapMarkers(true);
					}
					me._map_2.ggVisible=true;
				}
				else {
					me._map_2.style.visibility="hidden";
					if (me._map_2.ggClearMap) me._map_2.ggClearMap();
					me._map_2.ggVisible=false;
				}
			}
		}
		me._map_2.logicBlock_visible();
		me._map_2.ggCurrentLogicStateVisible = -1;
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2.ggUpdateConditionResize();
		}
		me.__49.appendChild(me._map_2);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_2.style.transition='right 0s, top 0s';
				if (me._image_2.ggCurrentLogicStatePosition == 0) {
					me._image_2.style.right='15px';
					me._image_2.style.top='15px';
				}
				else {
					me._image_2.style.right='100px';
					me._image_2.style.top='50px';
				}
			}
		}
		me._image_2.logicBlock_position();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me._image_2);
		me.__48.appendChild(me.__49);
		me.divSkin.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		el.ggId="\ubc1c\uc790\uad6d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__47.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.description == "\ubc1c\uc790\uad6d"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.hotspot.description == "\ubc1c\uac78\uc74c"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getHasTouch() == true)) && 
				((player.hotspot.description == "\ubc1c\uc790\uad6d"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getHasTouch() == true)) && 
				((player.hotspot.description == "\ubc1c\uac78\uc74c"))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else if (me.__47.ggCurrentLogicStateVisible == 1) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else if (me.__47.ggCurrentLogicStateVisible == 2) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else if (me.__47.ggCurrentLogicStateVisible == 3) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me.__211=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="\ubc1c\uc790\uad6d \ud0c0\uc774\uba38 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211.ggIsActive=function() {
			return (me.__211.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__211.ggTimestamp) / me.__211.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__211.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__211.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__211.style.transition='left 50ms ease-in-out 0ms, top 50ms ease-in-out 0ms';
				if (me.__211.ggCurrentLogicStatePosition == 0) {
					me.__211.style.left = 'calc(50% - (50% / 2))';
					me.__211.style.top = 'calc(50% - (50% / 2))';
				}
				else {
					me.__211.style.left='calc(50% - ((50% + 0px) / 2) + 0px)';
					me.__211.style.top='calc(50% - ((50% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__211.logicBlock_position();
		me.__211.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__211.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__211.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__211.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__211.style.transition='left 50ms ease-in-out 0ms, top 50ms ease-in-out 0ms';
				if (me.__211.ggCurrentLogicStateVisible == 0) {
					me.__211.style.visibility=(Number(me.__211.style.opacity)>0||!me.__211.style.opacity)?'inherit':'hidden';
					me.__211.ggVisible=true;
				}
				else {
					me.__211.style.visibility=(Number(me.__211.style.opacity)>0||!me.__211.style.opacity)?'inherit':'hidden';
					me.__211.ggVisible=true;
				}
			}
		}
		me.__211.logicBlock_visible();
		me.__211.ggActivate=function () {
			player.setVariableValue('vis_foot', !player.getVariableValue('vis_foot'));
		}
		me.__211.ggCurrentLogicStatePosition = -1;
		me.__211.ggCurrentLogicStateVisible = -1;
		me.__211.ggUpdateConditionTimer=function () {
			me.__211.logicBlock_visible();
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-15,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='right 300ms ease 500ms, top 300ms ease 500ms';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.right='-10px';
					me._image_3.style.top = 'calc(50% - (100% / 2) + (0px / 2) + -10px)';
				}
				else {
					me._image_3.style.right='-10px';
					me._image_3.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.ggActivate=function () {
			player.setVariableValue('vis_foot', true);
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__211.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:10,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 10px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_4.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me._image_4.ggCurrentLogicStatePosition == 0) {
					me._image_4.style.left='0px';
					me._image_4.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me._image_4.style.left='0px';
					me._image_4.style.top='calc(50% - ((100% + 0px) / 2) - 10px)';
				}
			}
		}
		me._image_4.logicBlock_position();
		me._image_4.ggActivate=function () {
			player.setVariableValue('vis_foot', true);
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.__211.appendChild(me._image_4);
		me.__47.appendChild(me.__211);
		me.divSkin.appendChild(me.__47);
		el=me.__7=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 483px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((483px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__7.style.transition='right 0s, top 0s, transform 0s';
				if (me.__7.ggCurrentLogicStatePosition == 0) {
					me.__7.style.right='2px';
					me.__7.style.top = 'calc(50% - (483px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__7.style.right='15px';
					me.__7.style.top='calc(50% - ((483px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__7.logicBlock_position();
		me.__7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__7.style.transition='right 0s, top 0s, transform 0s';
				if (me.__7.ggCurrentLogicStateScaling == 0) {
					me.__7.ggParameter.sx = 0.75;
					me.__7.ggParameter.sy = 0.7;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
				else {
					me.__7.ggParameter.sx = 1;
					me.__7.ggParameter.sy = 1;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_scaling();
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_2.style.transition='width 500ms ease-in 0ms, height 500ms ease-in 0ms, top 500ms ease-in 0ms';
				if (me._rectangle_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='0%';
					me._rectangle_2.style.top = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='100%';
					me._rectangle_2.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__44.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__44.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__44.style.transition='';
				if (me.__44.ggCurrentLogicStateVisible == 0) {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
				else if (me.__44.ggCurrentLogicStateVisible == 1) {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
				else {
					me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
					me.__44.ggVisible=true;
				}
			}
		}
		me.__44.logicBlock_visible();
		me.__44.onclick=function (e) {
			player.setVariableValue('vis_roomchoice', !player.getVariableValue('vis_roomchoice'));
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__51.style.transition='none';
				me.__51.style.visibility='hidden';
				me.__51.ggVisible=false;
			}
		}
		me.__44.onmouseover=function (e) {
			me.elementMouseOver['_44']=true;
		}
		me.__44.onmousemove=function (e) {
			me.__45.style.transition='none';
			me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
			me.__45.ggVisible=true;
		}
		me.__44.onmouseout=function (e) {
			me.elementMouseOver['_44']=false;
		}
		me.__44.ggCurrentLogicStateVisible = -1;
		me.__44.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_44']) {
				me.__45.style.transition='none';
				me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
				me.__45.ggVisible=true;
			}
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__210.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__210.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__210.style.transition='';
				if (me.__210.ggCurrentLogicStateVisible == 0) {
					me.__210.style.visibility=(Number(me.__210.style.opacity)>0||!me.__210.style.opacity)?'inherit':'hidden';
					me.__210.ggVisible=true;
				}
				else {
					me.__210.style.visibility="hidden";
					me.__210.ggVisible=false;
				}
			}
		}
		me.__210.logicBlock_visible();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me.__210);
		el=me.__46=document.createElement('div');
		els=me.__46__img=document.createElement('img');
		els.className='ggskin ggskin__46';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me.__46);
		el=me.__45=document.createElement('div');
		els=me.__45__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__45.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__45.ggUpdateText();
		el.appendChild(els);
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__45.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__45.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__45.style.transition='';
				if (me.__45.ggCurrentLogicStateVisible == 0) {
					me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
					me.__45.ggVisible=true;
				}
				else {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
			}
		}
		me.__45.logicBlock_visible();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me.__45);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -257px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			me.__45.style.transition='none';
			me.__45.style.visibility='hidden';
			me.__45.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me._timer_1);
		me.__10.appendChild(me.__44);
		el=me.__40=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40.style.transition='';
				if (me.__40.ggCurrentLogicStateVisible == 0) {
					me.__40.style.visibility="hidden";
					me.__40.ggVisible=false;
				}
				else if (me.__40.ggCurrentLogicStateVisible == 1) {
					me.__40.style.visibility="hidden";
					me.__40.ggVisible=false;
				}
				else {
					me.__40.style.visibility=(Number(me.__40.style.opacity)>0||!me.__40.style.opacity)?'inherit':'hidden';
					me.__40.ggVisible=true;
				}
			}
		}
		me.__40.logicBlock_visible();
		me.__40.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__54.ggVisible = !me.__54.ggVisible;
				var flag=me.__54.ggVisible;
				me.__54.style.transition='none';
				me.__54.style.visibility=((flag)&&(Number(me.__54.style.opacity)>0||!me.__54.style.opacity))?'inherit':'hidden';
			}
			me.__43.ggVisible = !me.__43.ggVisible;
			var flag=me.__43.ggVisible;
			me.__43.style.transition='none';
			me.__43.style.visibility=((flag)&&(Number(me.__43.style.opacity)>0||!me.__43.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('vis_mobilemap', false);
			}
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				me.__51.ggVisible = !me.__51.ggVisible;
				var flag=me.__51.ggVisible;
				me.__51.style.transition='none';
				me.__51.style.visibility=((flag)&&(Number(me.__51.style.opacity)>0||!me.__51.style.opacity))?'inherit':'hidden';
			}
			player.setVariableValue('vis_roomchoice', false);
		}
		me.__40.onmouseover=function (e) {
			me.elementMouseOver['_40']=true;
		}
		me.__40.onmousemove=function (e) {
			me.__41.style.transition='none';
			me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
			me.__41.ggVisible=true;
		}
		me.__40.onmouseout=function (e) {
			me.elementMouseOver['_40']=false;
		}
		me.__40.ggCurrentLogicStateVisible = -1;
		me.__40.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_40']) {
				me.__41.style.transition='none';
				me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
				me.__41.ggVisible=true;
			}
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__43);
		el=me.__42=document.createElement('div');
		els=me.__42__img=document.createElement('img');
		els.className='ggskin ggskin__42';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABaUlEQVR4nO3dwUrEMBRA0VdxreL/f6MM/kBcuFJ0IaZ6Kefsmxm4pClNp3OstYaOu//+AnwkSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzv2ug4zhsPc7MWuv4zfFmSIwgMYLECBKzbVH/xq8WuB/66qLi7M/ffiFjhsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIzNn7IX/pL/deTmOGxAgSI0iMIDGCxAgSI0iMIDGCxAgSc6VbJ5f4fYoZEiNIjCAxV1pDPlszcztx/Kc54Zb/lYO8zszziePfZuZx96BOWTGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMID'+
			'GCxAgSI0iMIDGCxFz5MaCHmXk5efztjl1/3+1l/O+8jP9iBIkRJEaQmG2LOnuYITGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgS8wZ7mBnYotOjNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__42);
		el=me.__41=document.createElement('div');
		els=me.__41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__41.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__41.ggUpdateText();
		el.appendChild(els);
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__41);
		me.__10.appendChild(me.__40);
		el=me.__39=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ud3c9\uba74\ub3c4\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			return (me.__39.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__39.ggTimestamp) / me.__39.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__39.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__39.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__39.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__39.style.transition='';
				if (me.__39.ggCurrentLogicStateVisible == 0) {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
				else {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
			}
		}
		me.__39.logicBlock_visible();
		me.__39.ggActivate=function () {
			me.__41.style.transition='none';
			me.__41.style.visibility='hidden';
			me.__41.ggVisible=false;
		}
		me.__39.ggCurrentLogicStateVisible = -1;
		me.__39.ggUpdateConditionTimer=function () {
			me.__39.logicBlock_visible();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__39);
		el=me.__35=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
				else if (me.__35.ggCurrentLogicStateVisible == 1) {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
				else {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.onclick=function (e) {
			me.__58.style.transition='none';
			me.__58.style.visibility=(Number(me.__58.style.opacity)>0||!me.__58.style.opacity)?'inherit':'hidden';
			me.__58.ggVisible=true;
			me.__8.style.transition='none';
			me.__8.style.visibility='hidden';
			me.__8.ggVisible=false;
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__54.style.transition='none';
				me.__54.style.visibility='hidden';
				me.__54.ggVisible=false;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.__4.style.transition='none';
			me.__4.style.visibility='hidden';
			me.__4.ggVisible=false;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility='hidden';
			me._rectangle_2.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__51.style.transition='none';
				me.__51.style.visibility='hidden';
				me.__51.ggVisible=false;
			}
		}
		me.__35.onmouseover=function (e) {
			me.elementMouseOver['_35']=true;
		}
		me.__35.onmousemove=function (e) {
			me.__36.style.transition='none';
			me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
			me.__36.ggVisible=true;
		}
		me.__35.onmouseout=function (e) {
			me.elementMouseOver['_35']=false;
		}
		me.__35.ggCurrentLogicStateVisible = -1;
		me.__35.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_35']) {
				me.__36.style.transition='none';
				me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
				me.__36.ggVisible=true;
			}
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		els=me.__37__img=document.createElement('img');
		els.className='ggskin ggskin__37';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__37);
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__36.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__36.ggUpdateText();
		el.appendChild(els);
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__36);
		me.__10.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			return (me.__34.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__34.ggTimestamp) / me.__34.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__34.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__34.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__34.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__34.style.transition='';
				if (me.__34.ggCurrentLogicStateVisible == 0) {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
				else {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
			}
		}
		me.__34.logicBlock_visible();
		me.__34.ggActivate=function () {
			me.__36.style.transition='none';
			me.__36.style.visibility='hidden';
			me.__36.ggVisible=false;
		}
		me.__34.ggCurrentLogicStateVisible = -1;
		me.__34.ggUpdateConditionTimer=function () {
			me.__34.logicBlock_visible();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__34);
		el=me._onoff=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uac00\uad6conoff";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._onoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._onoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._onoff.style.transition='';
				if (me._onoff.ggCurrentLogicStateVisible == 0) {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
				else if (me._onoff.ggCurrentLogicStateVisible == 1) {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
				else {
					me._onoff.style.visibility=(Number(me._onoff.style.opacity)>0||!me._onoff.style.opacity)?'inherit':'hidden';
					me._onoff.ggVisible=true;
				}
			}
		}
		me._onoff.logicBlock_visible();
		me._onoff.onclick=function (e) {
			me._onoff0.style.transition='none';
			me._onoff0.style.visibility=(Number(me._onoff0.style.opacity)>0||!me._onoff0.style.opacity)?'inherit':'hidden';
			me._onoff0.ggVisible=true;
		}
		me._onoff.onmouseover=function (e) {
			me.elementMouseOver['onoff']=true;
		}
		me._onoff.onmousemove=function (e) {
			me.__33.style.transition='none';
			me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
			me.__33.ggVisible=true;
		}
		me._onoff.onmouseout=function (e) {
			me.elementMouseOver['onoff']=false;
		}
		me._onoff.ggCurrentLogicStateVisible = -1;
		me._onoff.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['onoff']) {
				me.__33.style.transition='none';
				me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
				me.__33.ggVisible=true;
			}
		}
		me._onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._on=document.createElement('div');
		el.ggId="\uac00\uad6c-on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style.transition='';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.logicBlock_visible();
		me._on.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) == "\ud604\uad00"))
				)
			) {
				player.openNext("{node21}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e4"))
				)
			) {
				player.openNext("{node20}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\ub4dc\ub808\uc2a4\ub8f8"))
				)
			) {
				player.openNext("{node32}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e4"))
				)
			) {
				player.openNext("{node30}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\ubcf5\ub3c4"))
				)
			) {
				player.openNext("{node24}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uce68\uc2e4"))
				)
			) {
				player.openNext("{node38}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node23}","$(cur)");
			}
		}
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._onoff0=document.createElement('div');
		el.ggId="\uac00\uad6conoff\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._onoff0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._onoff0);
		el=me._on0=document.createElement('div');
		els=me._on0__img=document.createElement('img');
		els.className='ggskin ggskin_on0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEeklEQVR4nO2dy4scVRSHv2M60UkQdTHGldNkVkEQcSMMIaK4ECXGRQRBl/o3TCQwKGTtGBfxHzAo6EIkiOADIyJxkxhw48bHQiERX2gyOjPmuKiKjD23k6quW1W/njkf1OZW3XvOuV+/6tnm7gQ63NR3AsH/CSFihBAxQogYIUSMECJGCBEjhIgRQsQIIWKEEDFCiBghRIxB1wHN7E7gKeAh4B7gLuD2rvOowG/AJeAr4GPgLXe/1HpUd+9kAfYDbwCrgE/hslrmv7/VeepAxAA4PsUiUmKOA4M25svaPEFlZncA7wAHWwvSH58CT7r7rzkHbU2Imd0GfALc10oADS4AD7r777kGbEWIme0A3gceGbPJZeA94F'+
			'3gG+AixceBCgbsBfYBTwCPAXvGbPsh8Ki7/5MlckvfG0dJf/5eBV4DZrv6MZGpntky76tj6nohW6wWkh8CVxJJ/wUc6XtyG9Z2pKxjtLYVYJgjRhs7hkeBmUT78+7+dgvxOqPM/7nEqlso6s4SJOcr6FaK74fRV9DJvl/dmes8majxT2BG7R1yGNg90vYHcCxznL45RlHXRvYADzcdOLeQVEKnPPNv9b4p63k9sepw07FzC7k30XY6cwwVUnXd33TQ3EKGibYvM8dQ4UKibdh00Kw7hma2xuYjyDvdfT1bEBHMbACsjTSvu/vORuNmFrJpMHe3bAHEaKPeOEElRggRI4SIEULECCFiNBZiZnNmtmhmZ8asXzSzuaZxVGi93gYH2GaAl6l2rnwVWAZ2931gUL3eSZObBc5VSGx0OceUnZzqut5JktsFnJ0guWvLWWBX'+
			'35OsWu8kCS43SO7astz3RKvWWze5uymO34wGXAGWgHlgR7nMl20rie3XyHTKs2UZnddbN8EXE8EuAwvX6bNA+iziS31PuGK9dRP8LBFoqUK/pUS/z/uecMV66yb4QyLQfIV++xL9fu57whXrrXX43czWKT4vNzLwG1wkVl44t+mciIsfmu+j3rp76qPJcaPkqm4jSuf1xrEsMUKIGCFEjBAiRggRI4SIEULECCFihBAxQogYIUSMECJGCBEjhIjR+dOANpK6nH+7E+8QMUKIGCFEjBAiRq9f6lNwkUPnPzriHSJGCBEjhIgRQsQIIWLUFbLpirzyssnrUmUbUTqvt66Qi4m2YYV+c4m2X2rG7oPO660r5NtE2zMV+j2baPu6Zuw+6LzeukI+SrQtmtnCuA7lusXEqg9qxu6D7uuteb/EuFu8rjD+Fq/UE0q3wlKn3n'+
			'ZuaSulLAtMxrQtr1Sd39rPyzKzm4EzwAO1Om5fvqB4HPnfVTauvR9SDnwIOF+37zbkPHCoqgyYcMfQ3X8CDgAn2PyYu6CYk1eBA+VcVabxI/7KB608DTxO8cW2l8StYDliKVDW+11i1Y8UfyxwGnjT3b+faPyck2T23+mN1KBbQgi0+2zJOJYlRggRI4SIEULECCFihBAxtsxP0a1CvEPECCFihBAxQogYIUSMECJGCBEjhIgRQsQIIWKEEDH+BTTwvIeC/FytAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6con";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on0);
		me._onoff.appendChild(me._on);
		el=me._off=document.createElement('div');
		el.ggId="\uac00\uad6c-off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.comment) == "\ud604\uad00"))
				)
			) {
				player.openNext("{node2}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e4"))
				)
			) {
				player.openNext("{node1}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\ub4dc\ub808\uc2a4\ub8f8"))
				)
			) {
				player.openNext("{node13}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uac70\uc2e4"))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\ubcf5\ub3c4"))
				)
			) {
				player.openNext("{node5}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uce68\uc2e4"))
				)
			) {
				player.openNext("{node19}","$(cur)");
			}
			if (
				(
					((player._(me.ggUserdata.comment) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node4}","$(cur)");
			}
		}
		me._off.ggUpdatePosition=function (useTransition) {
		}
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEeklEQVR4nO2dy4scVRSHv2M60UkQdTHGldNkVkEQcSMMIaK4ECXGRQRBl/o3TCQwKGTtGBfxHzAo6EIkiOADIyJxkxhw48bHQiERX2gyOjPmuKiKjD23k6quW1W/njkf1OZW3XvOuV+/6tnm7gQ63NR3AsH/CSFihBAxQogYIUSMECJGCBEjhIgRQsQIIWKEEDFCiBghRIxB1wHN7E7gKeAh4B7gLuD2rvOowG/AJeAr4GPgLXe/1HpUd+9kAfYDbwCrgE/hslrmv7/VeepAxAA4PsUiUmKOA4M25svaPEFlZncA7wAHWwvSH58CT7r7rzkHbU2Imd0GfALc10oADS4AD7r777kGbEWIme0A3gceGbPJZeA94F'+
			'3gG+AixceBCgbsBfYBTwCPAXvGbPsh8Ki7/5MlckvfG0dJf/5eBV4DZrv6MZGpntky76tj6nohW6wWkh8CVxJJ/wUc6XtyG9Z2pKxjtLYVYJgjRhs7hkeBmUT78+7+dgvxOqPM/7nEqlso6s4SJOcr6FaK74fRV9DJvl/dmes8majxT2BG7R1yGNg90vYHcCxznL45RlHXRvYADzcdOLeQVEKnPPNv9b4p63k9sepw07FzC7k30XY6cwwVUnXd33TQ3EKGibYvM8dQ4UKibdh00Kw7hma2xuYjyDvdfT1bEBHMbACsjTSvu/vORuNmFrJpMHe3bAHEaKPeOEElRggRI4SIEULECCFiNBZiZnNmtmhmZ8asXzSzuaZxVGi93gYH2GaAl6l2rnwVWAZ2931gUL3eSZObBc5VSGx0OceUnZzqut5JktsFnJ0guWvLWWBX'+
			'35OsWu8kCS43SO7astz3RKvWWze5uymO34wGXAGWgHlgR7nMl20rie3XyHTKs2UZnddbN8EXE8EuAwvX6bNA+iziS31PuGK9dRP8LBFoqUK/pUS/z/uecMV66yb4QyLQfIV++xL9fu57whXrrXX43czWKT4vNzLwG1wkVl44t+mciIsfmu+j3rp76qPJcaPkqm4jSuf1xrEsMUKIGCFEjBAiRggRI4SIEULECCFihBAxQogYIUSMECJGCBEjhIjR+dOANpK6nH+7E+8QMUKIGCFEjBAiRq9f6lNwkUPnPzriHSJGCBEjhIgRQsQIIWLUFbLpirzyssnrUmUbUTqvt66Qi4m2YYV+c4m2X2rG7oPO660r5NtE2zMV+j2baPu6Zuw+6LzeukI+SrQtmtnCuA7lusXEqg9qxu6D7uuteb/EuFu8rjD+Fq/UE0q3wlKn3n'+
			'ZuaSulLAtMxrQtr1Sd39rPyzKzm4EzwAO1Om5fvqB4HPnfVTauvR9SDnwIOF+37zbkPHCoqgyYcMfQ3X8CDgAn2PyYu6CYk1eBA+VcVabxI/7KB608DTxO8cW2l8StYDliKVDW+11i1Y8UfyxwGnjT3b+faPyck2T23+mN1KBbQgi0+2zJOJYlRggRI4SIEULECCFihBAxtsxP0a1CvEPECCFihBAxQogYIUSMECJGCBEjhIgRQsQIIWKEEDH+BTTwvIeC/FytAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6coff";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		me._off.appendChild(me._off0);
		me._onoff.appendChild(me._off);
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__33.ggCurrentLogicStateText != newLogicStateText) {
				me.__33.ggCurrentLogicStateText = newLogicStateText;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateText == 0) {
					if (me.__33.ggUpdateText) {
					me.__33.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac00\uad6c\uc81c\uac70", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__33.ggUpdateText();
					} else {
						if (me.__33.ggUpdatePosition) me.__33.ggUpdatePosition();
					}
				}
				else {
					if (me.__33.ggUpdateText) {
					me.__33.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac00\uad6c\ubcf4\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__33.ggUpdateText();
					} else {
						if (me.__33.ggUpdatePosition) me.__33.ggUpdatePosition();
					}
				}
			}
		}
		me.__33.logicBlock_text();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me._onoff.appendChild(me.__33);
		me.__10.appendChild(me._onoff);
		el=me.__32=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uac00\uad6c\uc628\uc624\ud504\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			return (me.__32.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__32.ggTimestamp) / me.__32.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__32.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__32.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__32.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__32.style.transition='';
				if (me.__32.ggCurrentLogicStateVisible == 0) {
					me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
					me.__32.ggVisible=true;
				}
				else {
					me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
					me.__32.ggVisible=true;
				}
			}
		}
		me.__32.logicBlock_visible();
		me.__32.ggActivate=function () {
			me.__33.style.transition='none';
			me.__33.style.visibility='hidden';
			me.__33.ggVisible=false;
		}
		me.__32.ggCurrentLogicStateVisible = -1;
		me.__32.ggUpdateConditionTimer=function () {
			me.__32.logicBlock_visible();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__32);
		el=me.__28=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__28.style.transition='';
				if (me.__28.ggCurrentLogicStateVisible == 0) {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
				else if (me.__28.ggCurrentLogicStateVisible == 1) {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
				else {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
			}
		}
		me.__28.logicBlock_visible();
		me.__28.onclick=function (e) {
			player.toggleAutorotate();
			me.__31.ggVisible = !me.__31.ggVisible;
			var flag=me.__31.ggVisible;
			me.__31.style.transition='none';
			me.__31.style.visibility=((flag)&&(Number(me.__31.style.opacity)>0||!me.__31.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_icon5', true);
		}
		me.__28.onmouseover=function (e) {
			me.elementMouseOver['_28']=true;
		}
		me.__28.onmousemove=function (e) {
			me.__29.style.transition='none';
			me.__29.style.visibility=(Number(me.__29.style.opacity)>0||!me.__29.style.opacity)?'inherit':'hidden';
			me.__29.ggVisible=true;
		}
		me.__28.onmouseout=function (e) {
			me.elementMouseOver['_28']=false;
		}
		me.__28.ggCurrentLogicStateVisible = -1;
		me.__28.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_28']) {
				me.__29.style.transition='none';
				me.__29.style.visibility=(Number(me.__29.style.opacity)>0||!me.__29.style.opacity)?'inherit':'hidden';
				me.__29.ggVisible=true;
			}
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__31);
		el=me.__30=document.createElement('div');
		els=me.__30__img=document.createElement('img');
		els.className='ggskin ggskin__30';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__30);
		el=me.__29=document.createElement('div');
		els=me.__29__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__29.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__29.ggUpdateText();
		el.appendChild(els);
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__29);
		me.__10.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			return (me.__27.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__27.ggTimestamp) / me.__27.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__27.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
				else {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.ggActivate=function () {
			me.__29.style.transition='none';
			me.__29.style.visibility='hidden';
			me.__29.ggVisible=false;
		}
		me.__27.ggCurrentLogicStateVisible = -1;
		me.__27.ggUpdateConditionTimer=function () {
			me.__27.logicBlock_visible();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__27);
		el=me.__23=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc548\ub0b4\uc0ac\ud56d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 430px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__23.style.transition='';
				if (me.__23.ggCurrentLogicStateVisible == 0) {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
				else if (me.__23.ggCurrentLogicStateVisible == 1) {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
				else {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
			}
		}
		me.__23.logicBlock_visible();
		me.__23.onclick=function (e) {
			me.__26.ggVisible = !me.__26.ggVisible;
			var flag=me.__26.ggVisible;
			me.__26.style.transition='none';
			me.__26.style.visibility=((flag)&&(Number(me.__26.style.opacity)>0||!me.__26.style.opacity))?'inherit':'hidden';
			me.__1.ggVisible = !me.__1.ggVisible;
			var flag=me.__1.ggVisible;
			me.__1.style.transition='none';
			me.__1.style.visibility=((flag)&&(Number(me.__1.style.opacity)>0||!me.__1.style.opacity))?'inherit':'hidden';
		}
		me.__23.onmouseover=function (e) {
			me.elementMouseOver['_23']=true;
		}
		me.__23.onmousemove=function (e) {
			me.__24.style.transition='none';
			me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
			me.__24.ggVisible=true;
		}
		me.__23.onmouseout=function (e) {
			me.elementMouseOver['_23']=false;
		}
		me.__23.ggCurrentLogicStateVisible = -1;
		me.__23.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_23']) {
				me.__24.style.transition='none';
				me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
				me.__24.ggVisible=true;
			}
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		els=me.__25__img=document.createElement('img');
		els.className='ggskin ggskin__25';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc6a9\uc548\ub0b4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me.__24);
		me.__10.appendChild(me.__23);
		el=me.__22=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			return (me.__22.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__22.ggTimestamp) / me.__22.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__22.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__22.style.transition='';
				if (me.__22.ggCurrentLogicStateVisible == 0) {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
				else {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
			}
		}
		me.__22.logicBlock_visible();
		me.__22.ggActivate=function () {
			me.__24.style.transition='none';
			me.__24.style.visibility='hidden';
			me.__24.ggVisible=false;
		}
		me.__22.ggCurrentLogicStateVisible = -1;
		me.__22.ggUpdateConditionTimer=function () {
			me.__22.logicBlock_visible();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__22);
		el=me.__17=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 377px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
				else if (me.__17.ggCurrentLogicStateVisible == 1) {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
				else {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__21.ggVisible = !me.__21.ggVisible;
			var flag=me.__21.ggVisible;
			me.__21.style.transition='none';
			me.__21.style.visibility=((flag)&&(Number(me.__21.style.opacity)>0||!me.__21.style.opacity))?'inherit':'hidden';
			me.__19.style.transition='none';
			me.__19.style.visibility=(Number(me.__19.style.opacity)>0||!me.__19.style.opacity)?'inherit':'hidden';
			me.__19.ggVisible=true;
		}
		me.__17.onmouseover=function (e) {
			me.elementMouseOver['_17']=true;
		}
		me.__17.onmousemove=function (e) {
			me.__20.style.transition='none';
			me.__20.style.visibility=(Number(me.__20.style.opacity)>0||!me.__20.style.opacity)?'inherit':'hidden';
			me.__20.ggVisible=true;
		}
		me.__17.onmouseout=function (e) {
			me.elementMouseOver['_17']=false;
		}
		me.__17.ggCurrentLogicStateVisible = -1;
		me.__17.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_17']) {
				me.__20.style.transition='none';
				me.__20.style.visibility=(Number(me.__20.style.opacity)>0||!me.__20.style.opacity)?'inherit':'hidden';
				me.__20.ggVisible=true;
			}
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me.__21);
		el=me.__20=document.createElement('div');
		els=me.__20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__20.ggUpdateText();
		el.appendChild(els);
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me.__20);
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac\uc644\ub8cc\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin__18';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABX0lEQVR4nO3d0Y4BMRiA0al4/1fuXgubnTLDt3LONSL58itFZ8w5Nzoun34C3BIkRpAYQWIEiREkRpAYQWIEiREk5rpy4zGGfZZtG2duN5mQGEFiBIkRJGZpUf/FOOAxqt7+JsaExAgSI0iMIDGCxAgSI0iMIDGCxBzxSX2vb9m6n2M8tzkx5/zzjiYkRpAYQWIEiXnnov7Iv9y63/Od+rO/PzAhMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzxP/Uv+VQmQQTEiNIjCAxgsSsLuqvHBZj8d9hKc'+
			'grV5Z5dCyeCyPf85IVI0iMIDGCxAgSI0iMIDGCxHz0mFiXcr1nQmIEiREkRpCYU68NzjoTEiNIjCAxgsQIEiNIjCAxgsT8AMhtHc4x+ExaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.onclick=function (e) {
			me.__20.style.transition='none';
			me.__20.style.visibility='hidden';
			me.__20.ggVisible=false;
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me.__18);
		me.__10.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -234px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return (me.__16.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__16.ggTimestamp) / me.__16.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__16.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
				else {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.ggActivate=function () {
			me.__19.style.transition='none';
			me.__19.style.visibility='hidden';
			me.__19.ggVisible=false;
			me.__20.style.transition='none';
			me.__20.style.visibility='hidden';
			me.__20.ggVisible=false;
		}
		me.__16.ggCurrentLogicStateVisible = -1;
		me.__16.ggUpdateConditionTimer=function () {
			me.__16.logicBlock_visible();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__16);
		el=me.__12=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
				else if (me.__12.ggCurrentLogicStateVisible == 1) {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
				else {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.onclick=function (e) {
			player.toggleFullscreen();
			me.__15.ggVisible = !me.__15.ggVisible;
			var flag=me.__15.ggVisible;
			me.__15.style.transition='none';
			me.__15.style.visibility=((flag)&&(Number(me.__15.style.opacity)>0||!me.__15.style.opacity))?'inherit':'hidden';
		}
		me.__12.onmouseover=function (e) {
			me.elementMouseOver['_12']=true;
		}
		me.__12.onmousemove=function (e) {
			me.__13.style.transition='none';
			me.__13.style.visibility=(Number(me.__13.style.opacity)>0||!me.__13.style.opacity)?'inherit':'hidden';
			me.__13.ggVisible=true;
		}
		me.__12.onmouseout=function (e) {
			me.elementMouseOver['_12']=false;
		}
		me.__12.ggCurrentLogicStateVisible = -1;
		me.__12.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_12']) {
				me.__13.style.transition='none';
				me.__13.style.visibility=(Number(me.__13.style.opacity)>0||!me.__13.style.opacity)?'inherit':'hidden';
				me.__13.ggVisible=true;
			}
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15.style.transition='';
				if (me.__15.ggCurrentLogicStateVisible == 0) {
					me.__15.style.visibility="hidden";
					me.__15.ggVisible=false;
				}
				else {
					me.__15.style.visibility="hidden";
					me.__15.ggVisible=false;
				}
			}
		}
		me.__15.logicBlock_visible();
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me.__15);
		el=me.__14=document.createElement('div');
		els=me.__14__img=document.createElement('img');
		els.className='ggskin ggskin__14';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAD0UlEQVR4nO2c207VQBSGv228NxAwHjAQI2o8QDwlRG+88M4n4BF8Ax/MCzzENyBR4yFEAU9BEIm+Qb0YagBn9t6ddqZ/m/UlvdmdWdOuj9J275k1KIoCQ4djbR+AcRgTIoYJEcOEiGFCxDAhYpgQMUyIGCZEDBMihgkRw4SoURRF5Q0oEm8Pc50/8CTheRRAUSW3doWIYULEMCFimBA1Et3UPwCnWzqlXCwAP2n4pp7yKWsNOJszQxkZWwZCQgrgI3AuX56yMEyG9/O2hOwFPl8HZnNlKzGjZCz69rUl5AbwK7BvE5jLkrJ0jCMD3/62hLB/UKGD/gycT5qydIwrA1+bNoUAXAN2Am2+AhfS5CwZo2QsHGkvJw'+
			'TgCrAdaPcduNhszpJRVQa+tgpCAC4DW4G2W/v7lYmRga+9ihCAS7grwtf+B+5KUiRWBr4+SkIA5nH3Dl+fHeBqXM6SUUcGvn5qQsA9XX0ZcpKL4a5ZqSsDX19FIeDeQzYDfXdx7zFt0oQMfP1VhYB7Y98I9N8Dbo4Zp2makoEvhrIQcN9tfQrE+A3crhCrCZqUgS+OuhBw3wKvBeL8AZYqxoulaRn4YnVBCMAZ3O8mISl3I2JWIYUMfPG6IgTgFPA+EO9FZMxxeRoYt44MfDGr5PZ45KCPaxzwQbaB+8BLDr+PrAHLDY0RYhkn/eDT3S7wAHhTI2693EReIU0zDbzG/UV9A2ZSDOJhElilmSsjSI5/WSmYAp7hvm7JySSwAlxPNUCV3A5iEjwYDBIcdn+pkmObBiSGCRHDhIhhQsQwIWKYEDFMiBgmRAwTIoYJEcOE'+
			'iGFCxDAhYpgQMUyIGCZEDBMihgkRw4SIYULEMCFimBAxTIgYSkIWcBPWJjKPO4+b5zuVeVw/IjMXD85EXyWflBnc1NUCeIWb0lqXiaNbjqmk654tFt+ygBxSpvl/5v1b4GTNuJ1ejjBsjcZKnayMwfPAuO9wyyRi6ayQKvVDUnAPtzDIN36dAmydFNK2jJIlwlJiC7B1ToiKjJI7uMWmvuOJKcDWKSFqMkpu0VwBts4IUZVR0lQBtk4IUZdRskj9AmzyQlItP05F3QJs0kK6JqOkTgE2WSFdlVESW4BNUkjXZZTEFGCTE9IXGSVVC7BJCembjJIqBdhkhPRVRskc4xVgkxHSZxkls4wuwCYjpO8ySkYVYJMV0kcZJcMKsEkK6bOMkmEF2OSE1N0epc3lP05kOJdKQpRmnRhoTQMyMCFymBAxoirKGemwK0QMEyKGCR'+
			'HDhIhhQsQwIWKYEDFMiBgmRAwTIsZfnQGwNRLcyH4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me.__14);
		el=me.__13=document.createElement('div');
		els=me.__13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__13.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__13.ggUpdateText();
		el.appendChild(els);
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me.__13);
		me.__10.appendChild(me.__12);
		el=me.__11=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			return (me.__11.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__11.ggTimestamp) / me.__11.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__11.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__11.style.transition='';
				if (me.__11.ggCurrentLogicStateVisible == 0) {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
				else {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
			}
		}
		me.__11.logicBlock_visible();
		me.__11.ggActivate=function () {
			me.__13.style.transition='none';
			me.__13.style.visibility='hidden';
			me.__13.ggVisible=false;
		}
		me.__11.ggCurrentLogicStateVisible = -1;
		me.__11.ggUpdateConditionTimer=function () {
			me.__11.logicBlock_visible();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__11);
		me._rectangle_2.appendChild(me.__10);
		me.__7.appendChild(me._rectangle_2);
		el=me.__8=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58up";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up.style.transition='';
				if (me._up.ggCurrentLogicStateVisible == 0) {
					me._up.style.visibility="hidden";
					me._up.ggVisible=false;
				}
				else {
					me._up.style.visibility=(Number(me._up.style.opacity)>0||!me._up.style.opacity)?'inherit':'hidden';
					me._up.ggVisible=true;
				}
			}
		}
		me._up.logicBlock_visible();
		me._up.onclick=function (e) {
			player.setVariableValue('vis_short', true);
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me._up);
		el=me.__9=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c\ub2e4\uc6b4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_9'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__9.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__9.ggCurrentLogicStatePosition == 0) {
					me.__9.style.left='-10px';
					me.__9.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__9.ggCurrentLogicStatePosition == 1) {
					me.__9.style.left='20px';
					me.__9.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__9.style.left='0px';
					me.__9.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__9.logicBlock_position();
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__9.ggCurrentLogicStateVisible == 0) {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
				else if (me.__9.ggCurrentLogicStateVisible == 1) {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
				else {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
			}
		}
		me.__9.logicBlock_visible();
		me.__9.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__9.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__9.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__9.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__9.ggCurrentLogicStateAlpha == 0) {
					me.__9.style.visibility=me.__9.ggVisible?'inherit':'hidden';
					me.__9.style.opacity=1;
				}
				else if (me.__9.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__9.style.opacity == 0.0) { me.__9.style.visibility="hidden"; } }, 505);
					me.__9.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__9.style.opacity == 0.0) { me.__9.style.visibility="hidden"; } }, 505);
					me.__9.style.opacity=0;
				}
			}
		}
		me.__9.logicBlock_alpha();
		me.__9.onmouseover=function (e) {
			me.elementMouseOver['_9']=true;
			me.__9.logicBlock_position();
		}
		me.__9.onmouseout=function (e) {
			me.elementMouseOver['_9']=false;
			me.__9.logicBlock_position();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style.transition='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
				else {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
			}
		}
		me._rectangle_3.logicBlock_visible();
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('vis_long', true);
			player.setVariableValue('vis_short', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._dowm=document.createElement('div');
		els=me._dowm__img=document.createElement('img');
		els.className='ggskin ggskin_dowm';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58dowm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._dowm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dowm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dowm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dowm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dowm.style.transition='';
				if (me._dowm.ggCurrentLogicStateVisible == 0) {
					me._dowm.style.visibility=(Number(me._dowm.style.opacity)>0||!me._dowm.style.opacity)?'inherit':'hidden';
					me._dowm.ggVisible=true;
				}
				else {
					me._dowm.style.visibility="hidden";
					me._dowm.ggVisible=false;
				}
			}
		}
		me._dowm.logicBlock_visible();
		me._dowm.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._dowm);
		me.__9.appendChild(me._rectangle_3);
		me.__8.appendChild(me.__9);
		me.__7.appendChild(me.__8);
		me.divSkin.appendChild(me.__7);
		el=me.__4=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -100%;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.right='0px';
					me.__4.style.bottom='0%';
				}
				else {
					me.__4.style.right='0px';
					me.__4.style.bottom='-100%';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -55%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__5.style.transition='left 0s, top 0s';
				if (me.__5.ggCurrentLogicStatePosition == 0) {
					me.__5.style.left='0px';
					me.__5.style.top='-52%';
				}
				else {
					me.__5.style.left='0px';
					me.__5.style.top='-55%';
				}
			}
		}
		me.__5.logicBlock_position();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me.__5);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 199px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 383px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 384px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 384px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 200px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='top : -260%;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1.style.right='0%';
					me._scrollarea_1.style.top='-203%';
				}
				else {
					me._scrollarea_1.style.right='5%';
					me._scrollarea_1.style.top='-260%';
				}
			}
		}
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._scrollarea_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._scrollarea_1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStateSize == 0) {
					me._scrollarea_1.style.width='95%';
					me._scrollarea_1.style.height='200px';
					skin.updateSize(me._scrollarea_1);
				}
				else {
					me._scrollarea_1.style.width='60%';
					me._scrollarea_1.style.height='200px';
					skin.updateSize(me._scrollarea_1);
				}
			}
		}
		me._scrollarea_1.logicBlock_size();
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 180;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18a2.ggUpdating == true) return;
			me.__18a2.ggUpdating = true;
			var el=me.__18a2;
			var curNumRows = 0;
			curNumRows = me.__18a2.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18a2.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18a2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18a2.getFilteredNodes(tourNodes, filter);
			me.__18a2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18a2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18a2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18a2.ggWidth) + 'px';
				parameter.width=me.__18a2.ggWidth + 'px';
				parameter.height=me.__18a2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18a2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__18a2.ggNodeCount = me.__18a2.ggNumFilterPassed;
			me.__18a2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18a2.parentNode && me.__18a2.parentNode.classList.contains('ggskin_subelement') && me.__18a2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18a2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구있음";
		el.ggFilter[1] = "메인";
		el.ggId="\uac00\uad6c\uc788\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 180px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18a2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18a2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18a2.style.transition='width 0s, height 0s';
				if (me.__18a2.ggCurrentLogicStateSize == 0) {
					me.__18a2.ggWidth=100;
					me.__18a2.ggHeight=150;
					me.__18a2.ggUpdate();
					skin.updateSize(me.__18a2);
				}
				else {
					me.__18a2.ggWidth=150;
					me.__18a2.ggHeight=180;
					me.__18a2.ggUpdate();
					skin.updateSize(me.__18a2);
				}
			}
		}
		me.__18a2.logicBlock_size();
		me.__18a2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18a2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18a2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18a2.style.transition='width 0s, height 0s';
				if (me.__18a2.ggCurrentLogicStateVisible == 0) {
					me.__18a2.style.visibility=(Number(me.__18a2.style.opacity)>0||!me.__18a2.style.opacity)?'inherit':'hidden';
					me.__18a2.ggVisible=true;
				}
				else {
					me.__18a2.style.visibility="hidden";
					me.__18a2.ggVisible=false;
				}
			}
		}
		me.__18a2.logicBlock_visible();
		me.__18a2.ggCurrentLogicStateSize = -1;
		me.__18a2.ggCurrentLogicStateVisible = -1;
		me.__18a2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18a2.childNodes.length; i++) {
				var child=me.__18a2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18a2.ggUpdatePosition=function (useTransition) {
			me.__18a2.ggUpdate();
		}
		me.__18a.appendChild(me.__18a2);
		el=me.__18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18a0.ggUpdating == true) return;
			me.__18a0.ggUpdating = true;
			var el=me.__18a0;
			var curNumRows = 0;
			curNumRows = me.__18a0.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18a0.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18a0.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18a0.getFilteredNodes(tourNodes, filter);
			me.__18a0.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18a0.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18a0.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18a0.ggWidth) + 'px';
				parameter.width=me.__18a0.ggWidth + 'px';
				parameter.height=me.__18a0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18a0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__18a0.ggNodeCount = me.__18a0.ggNumFilterPassed;
			me.__18a0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18a0.parentNode && me.__18a0.parentNode.classList.contains('ggskin_subelement') && me.__18a0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18a0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구없음";
		el.ggFilter[1] = "메인";
		el.ggId="\uac00\uad6c\uc5c6\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18a0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18a0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18a0.style.transition='width 0s, height 0s';
				if (me.__18a0.ggCurrentLogicStateSize == 0) {
					me.__18a0.ggWidth=100;
					me.__18a0.ggHeight=150;
					me.__18a0.ggUpdate();
					skin.updateSize(me.__18a0);
				}
				else {
					me.__18a0.ggWidth=150;
					me.__18a0.ggHeight=200;
					me.__18a0.ggUpdate();
					skin.updateSize(me.__18a0);
				}
			}
		}
		me.__18a0.logicBlock_size();
		me.__18a0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18a0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18a0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18a0.style.transition='width 0s, height 0s';
				if (me.__18a0.ggCurrentLogicStateVisible == 0) {
					me.__18a0.style.visibility=(Number(me.__18a0.style.opacity)>0||!me.__18a0.style.opacity)?'inherit':'hidden';
					me.__18a0.ggVisible=true;
				}
				else {
					me.__18a0.style.visibility="hidden";
					me.__18a0.ggVisible=false;
				}
			}
		}
		me.__18a0.logicBlock_visible();
		me.__18a0.ggCurrentLogicStateSize = -1;
		me.__18a0.ggCurrentLogicStateVisible = -1;
		me.__18a0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18a0.childNodes.length; i++) {
				var child=me.__18a0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18a0.ggUpdatePosition=function (useTransition) {
			me.__18a0.ggUpdate();
		}
		me.__18a.appendChild(me.__18a0);
		me._scrollarea_1__content.appendChild(me.__18a);
		me.__4.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__4);
		el=me.__1=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='text-shawdow:2px 2px 2px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		els=me.__6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b86";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : hidden;';
		hs+='width : calc(60% + 2px);';
		hs+='pointer-events:auto;';
		hs+='word-break: keep-all; line-height:16px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px 5px 5px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__6.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucf58\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc720\uc0c1\uc635\uc158 \ud488\ubaa9\uc774 \uc801\uc6a9\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \n* VR\uacfc \uc2e4\uc81c \uc774\ubbf8\uc9c0\uc640\ub294 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__6.ggUpdateText();
		el.appendChild(els);
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6.style.transition='color 0s';
				if (me.__6.ggCurrentLogicStateVisible == 0) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
			}
		}
		me.__6.logicBlock_visible();
		me.__6.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__6.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__6.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__6__text.style.transition='color 0s';
				if (me.__6.ggCurrentLogicStateTextColor == 0) {
					me.__6.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__6.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__6.logicBlock_textcolor();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me.__6);
		el=me.__pc=document.createElement('div');
		els=me.__pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8 - pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0%;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% + 2px);';
		hs+='pointer-events:auto;';
		hs+='font-size:0.9em;word-break: keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucf58\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ud55c \uc138\ub300 VR\uc774\uba70, \ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c\ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc0c9\uc0c1 \ubc0f \uc7ac\uc9c8\uc774 \uc2e4\uc81c \uc2dc\uacf5\uacfc\ub294 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc720\uc0c1\uc635\uc158 \ud488\ubaa9\uc774 \uc801\uc6a9\ub418\uc5c8\uace0, \uc2e4\uc81c \uc2dc\uacf5 \uc2dc \uc124\uce58\ub418\uc9c0 \uc54a\ub294 \uc804\uc2dc\ud488(\uac00\uad6c, \uc2e4\ub0b4\uc7a5\uc2dd\ud488 \ub4f1)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__pc.ggUpdateText();
		el.appendChild(els);
		me.__pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__pc.style.transition='color 0s';
				if (me.__pc.ggCurrentLogicStateVisible == 0) {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
				else {
					me.__pc.style.visibility=(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity)?'inherit':'hidden';
					me.__pc.ggVisible=true;
				}
			}
		}
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__pc.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__pc.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__pc__text.style.transition='color 0s';
				if (me.__pc.ggCurrentLogicStateTextColor == 0) {
					me.__pc.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__pc.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__pc.logicBlock_textcolor();
		me.__pc.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me.__pc);
		me.divSkin.appendChild(me.__1);
		el=me.__=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 25px 25px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 78.4314%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((78.4314% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_1);
		me._container_2.appendChild(me._container_1);
		me.__0.appendChild(me._container_2);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__59.logicBlock_visible();
		me.__54.logicBlock_position();
		me.__54.logicBlock_size();
		me.__54.logicBlock_scaling();
		me.__54.logicBlock_visible();
		me._rectangle_41.logicBlock_size();
		me.__57.logicBlock_scaling();
		me._map_11.ggMarkerInstances=[];
		me._map_11.ggLastNodeId=null;
		me._map_11.ggSimpleFloorplanMarkerArray=[];
		me._map_11.ggFloorplanWidth=0;
		me._map_11.ggFloorplanHeight=0;
		me._map_11__mapdiv=document.createElement('div');
		me._map_11__mapdiv.className='ggskin ggskin_map';
		me._map_11.appendChild(me._map_11__mapdiv);
		me._map_11__img=document.createElement('img');
		me._map_11__img.className='ggskin ggskin_map';
		me._map_11__mapdiv.appendChild(me._map_11__img);
		me._map_11.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_11.ggRadar.update=function() {
			var radar=me._map_11.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_11.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_11.ggFilteredIds.length > 0 && me._map_11.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_11.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_11__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_11__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_11.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_11__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_11.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_11.clientWidth;
			var mapHeight = me._map_11.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_11.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_11__img.setAttribute('src', imageFilename);
		me._map_11__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_11.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_11.ggFloorplanHeight / 2 + 'px;width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_11__img.setAttribute('style','width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_11.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_11.clientWidth / me._map_11.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_11.ggFloorplanHeight = me._map_11.clientHeight;
				me._map_11.ggFloorplanWidth = me._map_11.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_11.ggFloorplanWidth = me._map_11.clientWidth;
				me._map_11.ggFloorplanHeight = me._map_11.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_11.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_11.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_11.ggPermeableMap = true;
			} else {
				me._map_11.ggPermeableMap = false;
			}
			me._map_11.ggCalculateFloorplanSize(mapDetails);
			me._map_11.ggShowSimpleFloorplan(mapDetails);
			me._map_11.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_11.ggMapNotLoaded = false;
		}
		me._map_11.ggClearMap=function() {
			me._map_11.ggClearMapMarkers();
			me._map_11.ggMapNotLoaded = true;
		}
		me._map_11.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_11.ggMapId = mapId;
			if (!me._map_11.ggMapNotLoaded) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap();
				me._map_11.ggInitMapMarkers();
			}
		}
		me._map_11.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_11.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
					var xPos = (me._map_11.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_11.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_11.ggHMarkerAnchorOffset;
					yPos -= me._map_11.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_11.style['z-index'] + 2;
				}
			}
		}
		me._map_11.ggInitMapMarkers=function() {
			me._map_11.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_11.ggFilteredIds = [];
			if (me._map_11.ggFilter != '') {
				var filter = me._map_11.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_11.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_11.ggFilteredIds.length > 0) ids = me._map_11.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
				if (coords.length>=2) {
					me._map_11.ggHMarkerAnchorOffset = 12;
					me._map_11.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_11.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_11.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_11__mapdiv.appendChild(marker);
				}
			}
			me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_11);
		}
		me._map_11.ggClearMapMarkers=function() {
			for (id in me._map_11.ggSimpleFloorplanMarkerArray) {
				if (me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_11__mapdiv.removeChild(me._map_11.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_11.ggMarkerInstances=[];
			me._map_11.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_11.logicBlock_visible();
		me._map_21.ggMarkerInstances=[];
		me._map_21.ggLastNodeId=null;
		me._map_21.ggSimpleFloorplanMarkerArray=[];
		me._map_21.ggFloorplanWidth=0;
		me._map_21.ggFloorplanHeight=0;
		me._map_21__mapdiv=document.createElement('div');
		me._map_21__mapdiv.className='ggskin ggskin_map';
		me._map_21.appendChild(me._map_21__mapdiv);
		me._map_21__img=document.createElement('img');
		me._map_21__img.className='ggskin ggskin_map';
		me._map_21__mapdiv.appendChild(me._map_21__img);
		me._map_21.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_21.ggRadar.update=function() {
			var radar=me._map_21.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_21.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_21.ggFilteredIds.length > 0 && me._map_21.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_21.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_21.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_21__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_21__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_21.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_21__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_21.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_21.clientWidth;
			var mapHeight = me._map_21.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_21.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_21__img.setAttribute('src', imageFilename);
		me._map_21__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_21.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_21.ggFloorplanHeight / 2 + 'px;width:' + me._map_21.ggFloorplanWidth + 'px;height:' + me._map_21.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_21__img.setAttribute('style','width:' + me._map_21.ggFloorplanWidth + 'px;height:' + me._map_21.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_21.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_21.clientWidth / me._map_21.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_21.ggFloorplanHeight = me._map_21.clientHeight;
				me._map_21.ggFloorplanWidth = me._map_21.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_21.ggFloorplanWidth = me._map_21.clientWidth;
				me._map_21.ggFloorplanHeight = me._map_21.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_21.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_21.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_21.ggPermeableMap = true;
			} else {
				me._map_21.ggPermeableMap = false;
			}
			me._map_21.ggCalculateFloorplanSize(mapDetails);
			me._map_21.ggShowSimpleFloorplan(mapDetails);
			me._map_21.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_21.ggMapNotLoaded = false;
		}
		me._map_21.ggClearMap=function() {
			me._map_21.ggClearMapMarkers();
			me._map_21.ggMapNotLoaded = true;
		}
		me._map_21.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_21.ggMapId = mapId;
			if (!me._map_21.ggMapNotLoaded) {
				me._map_21.ggClearMap();
				me._map_21.ggInitMap();
				me._map_21.ggInitMapMarkers();
			}
		}
		me._map_21.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_21.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_21.ggMapId);
					var xPos = (me._map_21.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_21.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_21.ggHMarkerAnchorOffset;
					yPos -= me._map_21.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_21.style['z-index'] + 2;
				}
			}
		}
		me._map_21.ggInitMapMarkers=function() {
			me._map_21.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_21.ggFilteredIds = [];
			if (me._map_21.ggFilter != '') {
				var filter = me._map_21.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_21.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_21.ggFilteredIds.length > 0) ids = me._map_21.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_21.ggMapId);
				if (coords.length>=2) {
					me._map_21.ggHMarkerAnchorOffset = 12;
					me._map_21.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_21.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_21.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_21__mapdiv.appendChild(marker);
				}
			}
			me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_21);
		}
		me._map_21.ggClearMapMarkers=function() {
			for (id in me._map_21.ggSimpleFloorplanMarkerArray) {
				if (me._map_21.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_21__mapdiv.removeChild(me._map_21.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_21.ggMarkerInstances=[];
			me._map_21.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_21.logicBlock_visible();
		me.__51.logicBlock_position();
		me.__51.logicBlock_visible();
		me._rectangle_40.logicBlock_size();
		me.__53.logicBlock_scaling();
		me._map_10.ggMarkerInstances=[];
		me._map_10.ggLastNodeId=null;
		me._map_10.ggSimpleFloorplanMarkerArray=[];
		me._map_10.ggFloorplanWidth=0;
		me._map_10.ggFloorplanHeight=0;
		me._map_10__mapdiv=document.createElement('div');
		me._map_10__mapdiv.className='ggskin ggskin_map';
		me._map_10.appendChild(me._map_10__mapdiv);
		me._map_10__img=document.createElement('img');
		me._map_10__img.className='ggskin ggskin_map';
		me._map_10__mapdiv.appendChild(me._map_10__img);
		me._map_10.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_10.ggRadar.update=function() {
			var radar=me._map_10.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_10.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_10.ggFilteredIds.length > 0 && me._map_10.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_10.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_10__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_10__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_10.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_10__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_10.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_10.clientWidth;
			var mapHeight = me._map_10.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_10.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_10__img.setAttribute('src', imageFilename);
		me._map_10__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_10.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_10.ggFloorplanHeight / 2 + 'px;width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_10__img.setAttribute('style','width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_10.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_10.clientWidth / me._map_10.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_10.ggFloorplanHeight = me._map_10.clientHeight;
				me._map_10.ggFloorplanWidth = me._map_10.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_10.ggFloorplanWidth = me._map_10.clientWidth;
				me._map_10.ggFloorplanHeight = me._map_10.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_10.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_10.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_10.ggPermeableMap = true;
			} else {
				me._map_10.ggPermeableMap = false;
			}
			me._map_10.ggCalculateFloorplanSize(mapDetails);
			me._map_10.ggShowSimpleFloorplan(mapDetails);
			me._map_10.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_10.ggMapNotLoaded = false;
		}
		me._map_10.ggClearMap=function() {
			me._map_10.ggClearMapMarkers();
			me._map_10.ggMapNotLoaded = true;
		}
		me._map_10.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_10.ggMapId = mapId;
			if (!me._map_10.ggMapNotLoaded) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap();
				me._map_10.ggInitMapMarkers();
			}
		}
		me._map_10.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_10.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
					var xPos = (me._map_10.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_10.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_10.ggHMarkerAnchorOffset;
					yPos -= me._map_10.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_10.style['z-index'] + 2;
				}
			}
		}
		me._map_10.ggInitMapMarkers=function() {
			me._map_10.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_10.ggFilteredIds = [];
			if (me._map_10.ggFilter != '') {
				var filter = me._map_10.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_10.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_10.ggFilteredIds.length > 0) ids = me._map_10.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
				if (coords.length>=2) {
					me._map_10.ggHMarkerAnchorOffset = 12;
					me._map_10.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_10.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_10.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_10__mapdiv.appendChild(marker);
				}
			}
			me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_10);
		}
		me._map_10.ggClearMapMarkers=function() {
			for (id in me._map_10.ggSimpleFloorplanMarkerArray) {
				if (me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_10__mapdiv.removeChild(me._map_10.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_10.ggMarkerInstances=[];
			me._map_10.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_10.logicBlock_visible();
		me._map_20.ggMarkerInstances=[];
		me._map_20.ggLastNodeId=null;
		me._map_20.ggSimpleFloorplanMarkerArray=[];
		me._map_20.ggFloorplanWidth=0;
		me._map_20.ggFloorplanHeight=0;
		me._map_20__mapdiv=document.createElement('div');
		me._map_20__mapdiv.className='ggskin ggskin_map';
		me._map_20.appendChild(me._map_20__mapdiv);
		me._map_20__img=document.createElement('img');
		me._map_20__img.className='ggskin ggskin_map';
		me._map_20__mapdiv.appendChild(me._map_20__img);
		me._map_20.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_20.ggRadar.update=function() {
			var radar=me._map_20.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_20.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_20.ggFilteredIds.length > 0 && me._map_20.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_20.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_20__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_20__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_20.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_20__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_20.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_20.clientWidth;
			var mapHeight = me._map_20.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_20.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_20__img.setAttribute('src', imageFilename);
		me._map_20__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_20.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_20.ggFloorplanHeight / 2 + 'px;width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_20__img.setAttribute('style','width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_20.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_20.clientWidth / me._map_20.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_20.ggFloorplanHeight = me._map_20.clientHeight;
				me._map_20.ggFloorplanWidth = me._map_20.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_20.ggFloorplanWidth = me._map_20.clientWidth;
				me._map_20.ggFloorplanHeight = me._map_20.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_20.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_20.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_20.ggPermeableMap = true;
			} else {
				me._map_20.ggPermeableMap = false;
			}
			me._map_20.ggCalculateFloorplanSize(mapDetails);
			me._map_20.ggShowSimpleFloorplan(mapDetails);
			me._map_20.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_20.ggMapNotLoaded = false;
		}
		me._map_20.ggClearMap=function() {
			me._map_20.ggClearMapMarkers();
			me._map_20.ggMapNotLoaded = true;
		}
		me._map_20.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_20.ggMapId = mapId;
			if (!me._map_20.ggMapNotLoaded) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap();
				me._map_20.ggInitMapMarkers();
			}
		}
		me._map_20.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_20.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
					var xPos = (me._map_20.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_20.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_20.ggHMarkerAnchorOffset;
					yPos -= me._map_20.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_20.style['z-index'] + 2;
				}
			}
		}
		me._map_20.ggInitMapMarkers=function() {
			me._map_20.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_20.ggFilteredIds = [];
			if (me._map_20.ggFilter != '') {
				var filter = me._map_20.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_20.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_20.ggFilteredIds.length > 0) ids = me._map_20.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
				if (coords.length>=2) {
					me._map_20.ggHMarkerAnchorOffset = 12;
					me._map_20.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_20.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_20.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_20__mapdiv.appendChild(marker);
				}
			}
			me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_20);
		}
		me._map_20.ggClearMapMarkers=function() {
			for (id in me._map_20.ggSimpleFloorplanMarkerArray) {
				if (me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_20__mapdiv.removeChild(me._map_20.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_20.ggMarkerInstances=[];
			me._map_20.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_20.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-20px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-20px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__48.logicBlock_position();
		me.__48.logicBlock_size();
		me.__48.logicBlock_scaling();
		me.__49.logicBlock_size();
		me.__50.logicBlock_size();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_1.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 12;
					me._map_2.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_2.logicBlock_visible();
		me._image_2.logicBlock_position();
		me.__47.logicBlock_visible();
		me.__211.logicBlock_position();
		me.__211.logicBlock_visible();
		me._image_3.logicBlock_position();
		me._image_4.logicBlock_position();
		me.__7.logicBlock_position();
		me.__7.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__44.logicBlock_visible();
		me.__210.logicBlock_visible();
		me.__45.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__40.logicBlock_visible();
		me.__39.logicBlock_visible();
		me.__35.logicBlock_visible();
		me.__34.logicBlock_visible();
		me._onoff.logicBlock_visible();
		me._on.logicBlock_visible();
		me._off.logicBlock_visible();
		me.__33.logicBlock_text();
		me.__32.logicBlock_visible();
		me.__28.logicBlock_visible();
		me.__27.logicBlock_visible();
		me.__23.logicBlock_visible();
		me.__22.logicBlock_visible();
		me.__17.logicBlock_visible();
		me.__16.logicBlock_visible();
		me.__12.logicBlock_visible();
		me.__15.logicBlock_visible();
		me.__11.logicBlock_visible();
		me._up.logicBlock_visible();
		me.__9.logicBlock_position();
		me.__9.logicBlock_visible();
		me.__9.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me.__4.logicBlock_position();
		me.__5.logicBlock_position();
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size();
		me.__18a2.logicBlock_size();
		me.__18a2.logicBlock_visible();
		me.__18a0.logicBlock_size();
		me.__18a0.logicBlock_visible();
		me.__6.logicBlock_visible();
		me.__6.logicBlock_textcolor();
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me.__47.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__59.logicBlock_visible();
			me._map_11.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
			if (me._map_11.ggLastNodeId) {
				var lastActiveMarker = me._map_11.ggSimpleFloorplanMarkerArray[me._map_11.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_11.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_11.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_11.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_11.ggChangeMap(mapId);
					}
				}
			}
			me._map_11.ggLastNodeId = id;
			me._map_11.ggRadar.update();
			me._map_21.logicBlock_visible();
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_21.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_21.ggCalculateFloorplanSize(mapDetails);
				me._map_21.ggShowSimpleFloorplan(mapDetails);
				me._map_21.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_21.ggRadar) me._map_21.ggRadar.update();
			if (me._map_21.ggLastNodeId) {
				var lastActiveMarker = me._map_21.ggSimpleFloorplanMarkerArray[me._map_21.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_21.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_21.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_21.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_21.ggChangeMap(mapId);
					}
				}
			}
			me._map_21.ggLastNodeId = id;
			me._map_21.ggRadar.update();
			me.__51.logicBlock_position();
			me._map_10.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
			if (me._map_10.ggLastNodeId) {
				var lastActiveMarker = me._map_10.ggSimpleFloorplanMarkerArray[me._map_10.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_10.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_10.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_10.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_10.ggChangeMap(mapId);
					}
				}
			}
			me._map_10.ggLastNodeId = id;
			me._map_10.ggRadar.update();
			me._map_20.logicBlock_visible();
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
			if (me._map_20.ggLastNodeId) {
				var lastActiveMarker = me._map_20.ggSimpleFloorplanMarkerArray[me._map_20.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_20.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_20.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_20.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_20.ggChangeMap(mapId);
					}
				}
			}
			me._map_20.ggLastNodeId = id;
			me._map_20.ggRadar.update();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__48.logicBlock_position();
			me._map_1.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._map_2.logicBlock_visible();
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
			me.__47.logicBlock_visible();
			me.__211.logicBlock_position();
			me.__211.logicBlock_visible();
			me._image_3.logicBlock_position();
			if (me._image_3.ggLastIsActive!=me._image_3.ggIsActive()) {
				me._image_3.ggLastIsActive=me._image_3.ggIsActive();
				if (me._image_3.ggIsActive()) {
					if (me._image_3.ggActivate) me._image_3.ggActivate();
				} else {
					if (me._image_3.ggDeactivate) me._image_3.ggDeactivate();
				}
			}
			me._image_4.logicBlock_position();
			if (me._image_4.ggLastIsActive!=me._image_4.ggIsActive()) {
				me._image_4.ggLastIsActive=me._image_4.ggIsActive();
				if (me._image_4.ggIsActive()) {
					if (me._image_4.ggActivate) me._image_4.ggActivate();
				} else {
					if (me._image_4.ggDeactivate) me._image_4.ggDeactivate();
				}
			}
			me._rectangle_2.logicBlock_size();
			me.__44.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__45.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__40.logicBlock_visible();
			me.__39.logicBlock_visible();
			me.__35.logicBlock_visible();
			me.__34.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__33.logicBlock_text();
			me.__32.logicBlock_visible();
			me.__28.logicBlock_visible();
			me.__27.logicBlock_visible();
			me.__23.logicBlock_visible();
			me.__22.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__16.logicBlock_visible();
			me.__12.logicBlock_visible();
			me.__11.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__9.logicBlock_position();
			me.__9.logicBlock_visible();
			me.__9.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__4.logicBlock_position();
			me.__18a2.logicBlock_visible();
			me.__18a2.ggUpdateConditionNodeChange();
			me.__18a0.logicBlock_visible();
			me.__18a0.ggUpdateConditionNodeChange();
			me.__6.logicBlock_textcolor();
			me.__pc.logicBlock_textcolor();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__54.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_11.ggVisible) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap(false);
				me._map_11.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_21.ggMarkerInstances.length; i++) {
				me._map_21.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_21.ggVisible) {
				me._map_21.ggClearMap();
				me._map_21.ggInitMap(false);
				me._map_21.ggInitMapMarkers(true);
			}
			me.__51.logicBlock_position();
			me.__51.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_10.ggVisible) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap(false);
				me._map_10.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_20.ggVisible) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap(false);
				me._map_20.ggInitMapMarkers(true);
			}
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","0",0);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__48.logicBlock_position();
			if (me._map_1.ggVisible) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			if (me._map_2.ggVisible) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap(false);
				me._map_2.ggInitMapMarkers(true);
			}
			me.__47.logicBlock_visible();
			me.__211.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_4.logicBlock_position();
			me._rectangle_2.logicBlock_size();
			me.__44.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__45.logicBlock_visible();
			me.__40.logicBlock_visible();
			me.__35.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__28.logicBlock_visible();
			me.__23.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__12.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__9.logicBlock_position();
			me.__9.logicBlock_visible();
			me.__9.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__4.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__15.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__15.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			me.__47.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map_11.ggRadar.update();
			me._map_21.ggRadar.update();
			me._map_10.ggRadar.update();
			me._map_20.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__18a0.ggInstances.length; i++) {
				me.__18a0.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me.__18a2.ggInstances.length; i++) {
				me.__18a2.ggInstances[i].ggEvent_sizechanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__54.logicBlock_position();
			me.__54.logicBlock_size();
			me.__54.logicBlock_scaling();
			me.__54.logicBlock_visible();
			me._rectangle_41.logicBlock_size();
			me.__57.logicBlock_scaling();
			me.__51.logicBlock_visible();
			me._rectangle_40.logicBlock_size();
			me.__53.logicBlock_scaling();
			me.__48.logicBlock_size();
			me.__48.logicBlock_scaling();
			me.__49.logicBlock_size();
			me.__50.logicBlock_size();
			me._image_2.logicBlock_position();
			me.__7.logicBlock_position();
			me.__7.logicBlock_scaling();
			me.__5.logicBlock_position();
			me._scrollarea_1.logicBlock_position();
			me._scrollarea_1.logicBlock_size();
			me.__18a2.logicBlock_size();
			me.__18a0.logicBlock_size();
			me.__6.logicBlock_visible();
			me.__pc.logicBlock_visible();
		});
		player.addListener('varchanged_vis_foot', function(event) {
			me.__211.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_4.logicBlock_position();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__9.logicBlock_visible();
			me.__9.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobilemap', function(event) {
			me.__51.logicBlock_position();
			me.__48.logicBlock_position();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__210.logicBlock_visible();
			me.__45.logicBlock_visible();
			me.__4.logicBlock_position();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__44.logicBlock_visible();
			me.__40.logicBlock_visible();
			me.__35.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__28.logicBlock_visible();
			me.__23.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__12.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__9.logicBlock_position();
			me.__9.logicBlock_visible();
			me.__9.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__44.logicBlock_visible();
			me.__40.logicBlock_visible();
			me.__35.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__28.logicBlock_visible();
			me.__23.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__12.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__18a2.ggUpdate();
			me.__18a0.ggUpdate();
		});
	};
	function SkinCloner__18a0_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a.style.width='95px';
					me._nodeimage_118a.style.height='95px';
					skin.updateSize(me._nodeimage_118a);
				}
				else {
					me._nodeimage_118a.style.width='115px';
					me._nodeimage_118a.style.height='115px';
					skin.updateSize(me._nodeimage_118a);
				}
			}
		}
		me._nodeimage_118a.logicBlock_size();
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a1.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a1);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
		me._nodeimage_118a.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a.logicBlock_size();
			};
	};
	function SkinCloner__18a2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a0.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a0.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a0.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a0.style.width='95px';
					me._nodeimage_118a0.style.height='95px';
					skin.updateSize(me._nodeimage_118a0);
				}
				else {
					me._nodeimage_118a0.style.width='115px';
					me._nodeimage_118a0.style.height='115px';
					skin.updateSize(me._nodeimage_118a0);
				}
			}
		}
		me._nodeimage_118a0.logicBlock_size();
		me._nodeimage_118a0.onclick=function (e) {
			if (me._nodeimage_118a0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a3.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a0.appendChild(me.__18a3);
		me._nodeimage_118a0.appendChild(me._rectangle_118a0);
		me.__div.appendChild(me._nodeimage_118a0);
		me._nodeimage_118a0.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a0.logicBlock_size();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else if (me._lottie_2.ggCurrentLogicStatePosition == 1) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else {
					me._lottie_2.style.left='-30px';
					me._lottie_2.style.top='-20px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='70px';
					me._lottie_2.style.height='70px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__3.ggUpdateText();
		});
		el.appendChild(els);
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__3.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__3.ggCurrentLogicStatePosition == 0) {
					me.__3.style.left = 'calc(50% - (50px / 2))';
					me.__3.style.bottom='0px';
				}
				else {
					me.__3.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__3.style.bottom='-28px';
				}
			}
		}
		me.__3.logicBlock_position();
		me.__3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__3.ggCurrentLogicStateSize == 0) {
					me.__3.style.width='95px';
					me.__3.style.height='25px';
					me.__3.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__3);
				}
				else if (me.__3.ggCurrentLogicStateSize == 1) {
					me.__3.style.width='60px';
					me.__3.style.height='25px';
					me.__3.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__3);
				}
				else if (me.__3.ggCurrentLogicStateSize == 2) {
					me.__3.style.width='60px';
					me.__3.style.height='25px';
					me.__3.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__3);
				}
				else {
					me.__3.style.width='50px';
					me.__3.style.height='25px';
					me.__3.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__3);
				}
			}
		}
		me.__3.logicBlock_size();
		me.__3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__3.ggCurrentLogicStateVisible == 0) {
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
				else if (me.__3.ggCurrentLogicStateVisible == 1) {
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
				else {
					me.__3.style.visibility="hidden";
					me.__3.ggVisible=false;
				}
			}
		}
		me.__3.logicBlock_visible();
		me.__3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__3.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__3.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__3.logicBlock_backgroundcolor();
		me.__3.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__3.ggCurrentLogicStateText != newLogicStateText) {
				me.__3.ggCurrentLogicStateText = newLogicStateText;
				me.__3.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__3.ggCurrentLogicStateText == 0) {
					if (me.__3.ggUpdateText) {
					me.__3.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__3.ggUpdateText();
					} else {
						if (me.__3.ggUpdatePosition) me.__3.ggUpdatePosition();
					}
				}
				else {
					if (me.__3.ggUpdateText) {
					me.__3.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__3.ggUpdateText();
					} else {
						if (me.__3.ggUpdatePosition) me.__3.ggUpdatePosition();
					}
				}
			}
		}
		me.__3.logicBlock_text();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__3);
		el=me.__2=document.createElement('div');
		els=me.__2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2.ggUpdateText();
		player.addListener('changenode', function() {
			me.__2.ggUpdateText();
		});
		el.appendChild(els);
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStatePosition == 0) {
					me.__2.style.left = 'calc(50% - (60px / 2))';
					me.__2.style.bottom='0px';
				}
				else if (me.__2.ggCurrentLogicStatePosition == 1) {
					me.__2.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__2.style.bottom='40px';
				}
				else {
					me.__2.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__2.style.bottom='-40px';
				}
			}
		}
		me.__2.logicBlock_position();
		me.__2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStateSize == 0) {
					me.__2.style.width='50px';
					me.__2.style.height='25px';
					me.__2.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__2);
				}
				else if (me.__2.ggCurrentLogicStateSize == 1) {
					me.__2.style.width='50px';
					me.__2.style.height='25px';
					me.__2.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__2);
				}
				else if (me.__2.ggCurrentLogicStateSize == 2) {
					me.__2.style.width='95px';
					me.__2.style.height='25px';
					me.__2.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__2);
				}
				else {
					me.__2.style.width='60px';
					me.__2.style.height='30px';
					me.__2.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__2);
				}
			}
		}
		me.__2.logicBlock_size();
		me.__2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStateVisible == 0) {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
				else if (me.__2.ggCurrentLogicStateVisible == 1) {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
				else {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
			}
		}
		me.__2.logicBlock_visible();
		me.__2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__2.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__2.logicBlock_backgroundcolor();
		me.__2.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__2.ggCurrentLogicStateText != newLogicStateText) {
				me.__2.ggCurrentLogicStateText = newLogicStateText;
				me.__2.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__2.ggCurrentLogicStateText == 0) {
					if (me.__2.ggUpdateText) {
					me.__2.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__2.ggUpdateText();
					} else {
						if (me.__2.ggUpdatePosition) me.__2.ggUpdatePosition();
					}
				}
				else {
					if (me.__2.ggUpdateText) {
					me.__2.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__2.ggUpdateText();
					} else {
						if (me.__2.ggUpdatePosition) me.__2.ggUpdatePosition();
					}
				}
			}
		}
		me.__2.logicBlock_text();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__2);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__3.logicBlock_position();
		me.__3.logicBlock_size();
		me.__3.logicBlock_visible();
		me.__3.logicBlock_backgroundcolor();
		me.__3.logicBlock_text();
		me.__2.logicBlock_position();
		me.__2.logicBlock_size();
		me.__2.logicBlock_visible();
		me.__2.logicBlock_backgroundcolor();
		me.__2.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__3.logicBlock_size();
				me.__3.logicBlock_backgroundcolor();
				me.__3.logicBlock_text();
				me.__2.logicBlock_size();
				me.__2.logicBlock_backgroundcolor();
				me.__2.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__3.logicBlock_size();
				me.__3.logicBlock_backgroundcolor();
				me.__3.logicBlock_text();
				me.__2.logicBlock_size();
				me.__2.logicBlock_backgroundcolor();
				me.__2.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__3.logicBlock_size();
				me.__3.logicBlock_visible();
				me.__3.logicBlock_backgroundcolor();
				me.__3.logicBlock_text();
				me.__2.logicBlock_position();
				me.__2.logicBlock_size();
				me.__2.logicBlock_visible();
				me.__2.logicBlock_backgroundcolor();
				me.__2.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__3.logicBlock_position();
				me.__2.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__3.logicBlock_size();
				me.__3.logicBlock_visible();
				me.__2.logicBlock_size();
				me.__2.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinElement_map_pin2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin2=document.createElement('div');
		el.ggId="map_pin2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin2.onclick=function (e) {
			if (
				(
					((me._map_pin2.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active2=document.createElement('div');
		els=me._map_pin_active2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateSize == 0) {
					me._map_pin_active2.style.width='18px';
					me._map_pin_active2.style.height='18px';
					me._map_pin_active2.style.left = 'calc(50% - (18px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (18px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
				else {
					me._map_pin_active2.style.width='22px';
					me._map_pin_active2.style.height='22px';
					me._map_pin_active2.style.left = 'calc(50% - (22px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
			}
		}
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active2.ggParameter.sx = 1.1;
					me._map_pin_active2.ggParameter.sy = 1.1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
				else {
					me._map_pin_active2.ggParameter.sx = 1;
					me._map_pin_active2.ggParameter.sy = 1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
			}
		}
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active2.style.visibility=me._map_pin_active2.ggVisible?'inherit':'hidden';
					me._map_pin_active2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active2.style.opacity == 0.0) { me._map_pin_active2.style.visibility="hidden"; } }, 505);
					me._map_pin_active2.style.opacity=0;
				}
			}
		}
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_active2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active2']=true;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active2']=false;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_active2);
		el=me._map_pin_normal2=document.createElement('div');
		els=me._map_pin_normal2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal2";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) - 10px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal2.style.width='16px';
					me._map_pin_normal2.style.height='22px';
					me._map_pin_normal2.style.left = 'calc(50% - (16px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (22px / 2) + (0px / 2) + -10px)';
					skin.updateSize(me._map_pin_normal2);
				}
				else {
					me._map_pin_normal2.style.width='38px';
					me._map_pin_normal2.style.height='44px';
					me._map_pin_normal2.style.left = 'calc(50% - (38px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (44px / 2) + (0px / 2) + -10px)';
					skin.updateSize(me._map_pin_normal2);
				}
			}
		}
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal2.ggParameter.sx = 1.2;
					me._map_pin_normal2.ggParameter.sy = 1.1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
				else {
					me._map_pin_normal2.ggParameter.sx = 1;
					me._map_pin_normal2.ggParameter.sy = 1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
			}
		}
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal2.style.opacity == 0.0) { me._map_pin_normal2.style.visibility="hidden"; } }, 505);
					me._map_pin_normal2.style.opacity=0;
				}
				else {
					me._map_pin_normal2.style.visibility=me._map_pin_normal2.ggVisible?'inherit':'hidden';
					me._map_pin_normal2.style.opacity=1;
				}
			}
		}
		me._map_pin_normal2.logicBlock_alpha();
		me._map_pin_normal2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal2']=true;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal2']=false;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_normal2);
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active2.logicBlock_alpha();
				me._map_pin_normal2.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active2.logicBlock_size();
				me._map_pin_normal2.logicBlock_size();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAJSklEQVR4nO2de3BVxR3HPzfvF4QQkpAQyE0gKRYwpYg6qCVUcZBHnXQUsGNbxTiNGStOZ2SCLZaWdgza0okPKi1VOnXaNLbQVl4jWIJtqShIEZBCgCQQAgkEiJAX5HL7x8rQMuTsOXvOvXdPOZ9/95ff/na/Oeeeff3WFwwG8dCHqEgH4PG/eIJohieIZniCaIYniGZ4gmiGJ4hmeIJohieIZniCaIYniGZ4gmhGTKQDsEAucBswDhgF+IEMIB2IAwYA54GLQDtwCmgEDgF7gPeB42GO2TI+jWd7E4GZwN3AFKDIAZ8HgS3Au8BaoNsBn46imyBRiM5/GHgASAlhXeeBPwK/AeqAyyGsyzS6CBIHPAJ8B/hcBOo/ACwDViFeeREj0oJEIYT4PjAiko'+
			'F8xlHgBwhhIvLERFKQ24CfA+MjFYABu4By4INwVxyJz95Y4EVgG3qKASKubYg4Y8NZcbifkHygFrglnJXaZDvwENAQjsrCKcgM4E1gkKqD5lMn2X1kP0dOHuNoawtNbS109XTT2dNFZ083yQmJJCckkZSQSF5mDiOycigYOpzigpvIzRhqJ/ZziC+/dXacmCFcgjwGrACirfxRMBhk95H9vLPz7/xtz4e0tLcpB5CTnsld4yZy74Q7KS64CZ/PZ9VFAPgW8CvlIEwQDkG+CywBTPdA98Ue/rxtM2+9t4HGk82OB+QfmsuDX7qP+yfdQ2JcgpU/DQKLgB87HtRnhFqQSuB5s8aBywFqt67n9Y1vceZ8RwjDEgwekMq8aQ8ye/J0oqMsPbwLgapQxBRKQcqB5Zh8MnYd+oSqmtc41NIUqnj6ZVROHgsfKucLIz9v9k+C'+
			'iPb9wulYQiXILGANJn4z+gIBXlqzit9ueZtIDlJ9Ph9fmzKLp0ofISba1NMSAEqBtx2NIwSdkI8YWKXKDE+caaNy5YvsbTzodAzKjPUXUVX2DNmDM82YnwO+iIOfxE4LEocYUE2QGdYfb+TJVxZzuuOsk/U7QkbqYF799mJG5uSZMf8QuBOH5sCcHqlXYUKM3Yf38/iyZ7UUA+BUxxnKlj3L7sP7zZhPxMKHiwwnn5DxiP8WwxfwvsZ6Kl5+jgvdXU7VGzJSEpNY/tQPGZNXKDMNIGYf/mW3TqeekCjERKGhGC3tbcxfvsQVYgBc6O5i/qtLzAxIoxHtt92fTgnyKGL2tl8u9fVRufIFzl4I/fjCSc5e6KBy5Qtc6uuTmd6O6AdbOCFILGL0akj1mlXsa6p3oLrws6+pnuo1q8yYfg+b+xScEORhwPBzZGf9Xmrq1j'+
			'pQVeSoqVvLzvq9MjM/8HU79dgVJAoxPdIvfYEAVTWvRXTQ5wTBYJClNSvoCwRkppXY6Fe7gkxDshukdus6jpw4ZrMaPTh84ii1W6Uz8EWIflHCriBlRoW9ly6y6p3VNqvQi19vWk3vJekYcJ6qfzuCpALTjQz+9I9NtH+q5+BPldMdZ/nLPzfLzGYCA1X82xFkBhBvZPB7l/+Q98fvtkjbFY/oH8vYEeTLRoV7Gg7Q1NZiw72+NLUeNzMhereKbzuCGFa4bnudDdf6s+GDrTKTsAqSj/jm7pf39oR9S1NYqft4u8zEj6SProeqILcaFTaebKb17GlF1+7g5JlTNLVKN9MbTiddD1VBio0Kdx/5t6Jbd2GineOs+lQVZKRRYf3xRkW37uJgs3ShUDpvfy2qgviNChtbnd+6oyMm2um36lNVEMMFZzsb2tzEiTOnZCZD'+
			'rPpUFSTNqLCzxx0LUHbplC+0pVv1qSqI4bRAV2+Polt30dkrPRGXbNWnqiCGm9+6erQ7uhcSTLTT8mKVqiCGixtJCYmKbt2FiXZK132vRVWQT40Kk+ItbWB2LcnxUkE6rfpUFcRwTj05IUnRrbtITpS2s92qT1VBWo0Kc9JNbcN0PdmDM2Qmlr//VQUxnHv2Z+UqunUXJtppeZuNqiAHjAoLh/kV3bqLotx8mYnlSb2QCFJcMFrRrbsw0U7L2/pVBdlpVOgfmkvWIMuDVFcxdHAGeVnDZGY7rPpVFaQBkWmnX+662XDJxPVMlrevEUkfXQ87S7h/NSqccWuJDdf6c9/EyTKTd1X82hHEsMKbC0YzIjPHhnt9ycvMYVy+NEdO2AVZB/QaGcwpUdoJoz1zp8ySmfSimGTAjiAdwHojg9I77iV9oOFMvesYkprG/ZPukZ'+
			'mtRzK91B92t5IaZjWIj43jG1NLbVahF9+c+lXiY+NkZitV/dsVZAOSb+25JTMpyB5usxo9KMgezuzJ0tfwQWCjah12BbmMJKNBTHQ0lXPKVXKLaIXP56NybrmZM+xV2Eh+5sSBnTcBw/QLE4rGuv4Hfk7JDCYUjpWZNSH6QxknBLkE/Ehm9HTpo2ZOs2rJmLxCni41dXxwCaI/lHHq0OfriERf/RIbE8PzZc+QliJN8KAVaSmpVJUtIDZGuhq7HXjDbn1OCXIZqECc1+6XYelZVFcsIkW+sKMFKYlJVFcsMrO+EwCewIHEmU5mcvgIeFlmNMZfSHXFIgYkWt6QEVYGJqXwUsVzjPGbes1WI/K72MbLdXIdhqSm8cqTi82u6+wA7sChXCehyAZUgHhaTGUDWvDLpXzSdMjpGJQZk1fI0scXmM0G1IFIKaJtNqArfAVY'+
			'jZcvy3ocumSU++jQPqpqVnA4AhnlRubksXBuOeNHWcoo9wQisaejaJdzsaZuHW9s/ENYcqKkpaQyb9oDzCmZcUPkXLyCclbS2q3rzZxSskxe1jBmT55+Q2YlvYKXt9ckrspsfbSthY8bDlDf3EBDazMn2ts413menou9dPV0k5SQSEJcPIOSB5Cdnkl+Vi6FufkUF4xmeEa2ndj/7zJbX8GNud93ALMJU+73cN+O0IBIGPlTNLnRxoDLwE+ASYRJDIjs/SG3Iz6LdbyyYhfis1Z6GN1pInlt3vuIV9djgC75m44h4rmFCIgBkb/y6ApxiI6YT+TuoPoZYvr8hr6D6lqigKkIcWYirs4LFd2Iq/NWApvR5DdNN0H+mwGIfFzTECJJN9Ka4DiwCbEJYT3i6jyt0FmQaxmByLEylqs3fWZy9abPFOACV2/6bOPqTZ97ER'+
			'd8HQ1zzJZxkyA3BN7lxJrhCaIZniCa4QmiGZ4gmuEJohmeIJrhCaIZniCa4QmiGZ4gmvEfNjjGEigwk5wAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='15px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__58.ggUpdateConditionTimer();
		me.__59.ggUpdateConditionTimer();
		if (me.__59.ggLastIsActive!=me.__59.ggIsActive()) {
			me.__59.ggLastIsActive=me.__59.ggIsActive();
			if (me.__59.ggLastIsActive) {
				me.__60.style.transition='none';
				me.__60.style.visibility='hidden';
				me.__60.ggVisible=false;
			} else {
			}
		}
		var hs='';
		if (me.__47.ggParameter) {
			hs+=parameterToTransform(me.__47.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + -35) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 20) + 'px) ';
		me.__47.style.transform=hs;
		me.__211.ggUpdateConditionTimer();
		if (me.__211.ggLastIsActive!=me.__211.ggIsActive()) {
			me.__211.ggLastIsActive=me.__211.ggIsActive();
			if (me.__211.ggLastIsActive) {
				player.setVariableValue('vis_foot', !player.getVariableValue('vis_foot'));
			} else {
			}
		}
		me.__44.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__45.style.transition='none';
				me.__45.style.visibility='hidden';
				me.__45.ggVisible=false;
			} else {
			}
		}
		me.__40.ggUpdateConditionTimer();
		me.__39.ggUpdateConditionTimer();
		if (me.__39.ggLastIsActive!=me.__39.ggIsActive()) {
			me.__39.ggLastIsActive=me.__39.ggIsActive();
			if (me.__39.ggLastIsActive) {
				me.__41.style.transition='none';
				me.__41.style.visibility='hidden';
				me.__41.ggVisible=false;
			} else {
			}
		}
		me.__35.ggUpdateConditionTimer();
		me.__34.ggUpdateConditionTimer();
		if (me.__34.ggLastIsActive!=me.__34.ggIsActive()) {
			me.__34.ggLastIsActive=me.__34.ggIsActive();
			if (me.__34.ggLastIsActive) {
				me.__36.style.transition='none';
				me.__36.style.visibility='hidden';
				me.__36.ggVisible=false;
			} else {
			}
		}
		me._onoff.ggUpdateConditionTimer();
		me.__32.ggUpdateConditionTimer();
		if (me.__32.ggLastIsActive!=me.__32.ggIsActive()) {
			me.__32.ggLastIsActive=me.__32.ggIsActive();
			if (me.__32.ggLastIsActive) {
				me.__33.style.transition='none';
				me.__33.style.visibility='hidden';
				me.__33.ggVisible=false;
			} else {
			}
		}
		me.__28.ggUpdateConditionTimer();
		me.__27.ggUpdateConditionTimer();
		if (me.__27.ggLastIsActive!=me.__27.ggIsActive()) {
			me.__27.ggLastIsActive=me.__27.ggIsActive();
			if (me.__27.ggLastIsActive) {
				me.__29.style.transition='none';
				me.__29.style.visibility='hidden';
				me.__29.ggVisible=false;
			} else {
			}
		}
		me.__23.ggUpdateConditionTimer();
		me.__22.ggUpdateConditionTimer();
		if (me.__22.ggLastIsActive!=me.__22.ggIsActive()) {
			me.__22.ggLastIsActive=me.__22.ggIsActive();
			if (me.__22.ggLastIsActive) {
				me.__24.style.transition='none';
				me.__24.style.visibility='hidden';
				me.__24.ggVisible=false;
			} else {
			}
		}
		me.__17.ggUpdateConditionTimer();
		me.__16.ggUpdateConditionTimer();
		if (me.__16.ggLastIsActive!=me.__16.ggIsActive()) {
			me.__16.ggLastIsActive=me.__16.ggIsActive();
			if (me.__16.ggLastIsActive) {
				me.__19.style.transition='none';
				me.__19.style.visibility='hidden';
				me.__19.ggVisible=false;
				me.__20.style.transition='none';
				me.__20.style.visibility='hidden';
				me.__20.ggVisible=false;
			} else {
			}
		}
		me.__12.ggUpdateConditionTimer();
		me.__11.ggUpdateConditionTimer();
		if (me.__11.ggLastIsActive!=me.__11.ggIsActive()) {
			me.__11.ggLastIsActive=me.__11.ggIsActive();
			if (me.__11.ggLastIsActive) {
				me.__13.style.transition='none';
				me.__13.style.visibility='hidden';
				me.__13.ggVisible=false;
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};