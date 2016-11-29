(function() {
	function x() {
		this.a = document.getElementById("hidediv");
		this.b = document.getElementById("hbox");
		this.h = this.b.clientHeight;
		this.c = document.createElement("div");
		this.xh = 150;
		this.opens=0;

	}
	x.prototype = {
		insertAfter: function(newElement, targetElement) {
			var parent = targetElement.parentNode;
			if (parent.lastChild == targetElement) {
				parent.a(newElement);
			} else {
				parent.insertBefore(newElement, targetElement.nextSibling);
			}
		},
		cs: function() {
			var ts=this;
			if (this.h > this.xh) {
				this.a.style.cssText = "height:"+this.xh+"px;";
				this.opens=0;
			}
			this.s();
			this.c.onclick=function(){
				if(ts.opens==0){
					ts.a.style.cssText = "height:auto;";
					ts.c.innerHTML = "收起";
					ts.opens=1;
				}else{
					ts.a.style.cssText = "height:"+ts.xh+"px;";
					ts.c.innerHTML = "展开";
					ts.opens=0;
				}
			}
		},
		s: function() {
			this.c.id = "openbox";
			this.c.innerHTML = "展开";
			this.insertAfter(this.c, this.a)

		}
	}
	var xx = new x();
	xx.cs();
})();
// JavaScript Document