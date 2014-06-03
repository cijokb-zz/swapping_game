/*
    SWAPPING GAME
    
    This is a small game built using pure javscript.The ultimate aim is to order the numbers corect order. 

    version 1.0
    
    Developed by Cijo K.B
    cijo.kb@gmail.com

*/
	window.onload=initialize;
	var a=0,b=0,ele=0,ans=false,r1=0,c1=0,func="easy",max,user_name,steps=0; //global variables
	var correct=new Array();
		
	function initialize()
	{
		document.getElementById("reload").style.visibility="hidden";
		//user_name=prompt("Please Enter your name","");
		//document.getElementById("user").innerHTML="welcome "+user_name;

		document.getElementById("easy").onclick=easy;
		document.getElementById("medium").onclick=medium;
		document.getElementById("difficulty").onclick=difficulty;
		document.getElementById("reload").onclick= function () 
		{
			if(func=="easy")
			{
			 easy();
			}
			else if(func=="medium")
			{
			 medium();	
			}
			else		
			{
			 difficulty();	
			}
		}
		
	}
		
	//Levels
	function easy() //easy(3*3)
	{
		func="easy";
		remove_table();
		var obj=create_table(3,3);
		fill_table(obj,1,1);
		assg_control(obj);
		fill_correct(max);
		return false;
	}	

	function medium()  //medium(4*4)
	{	
		func="medium";
		remove_table();
		var obj=create_table(4,4);
		fill_table(obj,1,2);
		assg_control(obj);
		fill_correct(max);
		return false;
	}	
	
	function difficulty() //(5*5)
	{	
		func="difficulty";
		remove_table();
		var obj=create_table(5,5);
		fill_table(obj,3,3);
		assg_control(obj);
		fill_correct(max);
		return false;
	}	

	//removi the table
	function remove_table ()
		{
			var elements = document.getElementsByTagName("table");
			if(elements.length>0)
			{
				for (var n=0; n < elements.length; n++)
				 {
					var element = elements[n];
					element.parentNode.removeChild(element);				
				}
			}
			elements=document.getElementById("step");
			elements.innerHTML="";
			steps="";	
		} 

	// creating the table
	function create_table (r,c)
		{	
			var ele=document.createElement('table');
			var k=0;
			for (i=0;i<r;i++)
			{ 	
			      var tr,tc;
				tr=ele.insertRow(i);
				rid=i;
				tr.setAttribute("id",i);
				for(j=0;j<c;j++)
				{
				  tc=tr.insertCell(j);
				  var cid="col"+k; 	
				  tc.setAttribute("id",cid);	
				  document.getElementById("tb").appendChild(ele);
				  k++;	
				}		
			}		
			document.getElementById("reload").style.visibility="visible";
			return ele;
		}
	
	//filling the table	
	function fill_table(tb,r,c)
		{
			max=(tb.rows.length*tb.rows[0].cells.length)-1;
			var dup=new Array(max);
			k=0;
			for(i=0;i<tb.rows.length;i++)
			{     
				for(j=0;j<tb.rows[i].cells.length;j++)
				{	
					var num;
					do{	
						num=num_gen(max);
					}while(dup[num]);
					if(i!=r ||  j!=c)
					{
						tb.rows[i].cells[j].innerHTML=num;
						dup[num]=true;
					}
					else
					{
						//tb.rows[i].cells[j].setAttribute("id","blank");
						continue;
					}
				}
			}
			
			return false;
		}

	function num_gen(x)
	 {
		var rtn=Math.floor((Math.random()*x)+1);
		return rtn;	
	 }		
	
	function assg_control (tb)
	{
		//setting the event handler for each columns
		for(i=0;i<tb.rows.length;i++)
			{
				for(j=0;j<tb.rows[i].cells.length;j++)
				{	
					//tb.rows[i].cells[j].onmousedown=store_val;
					//tb.rows[i].cells[j].onmouseup=change_val;
					tb.rows[i].cells[j].addEventListener('click',store_val,false);
				}
		}
		document.body.addEventListener('keydown',move_val,false);
		return false;
	}
	
	//storing the source val	
	function store_val()
	{
		r1=document.getElementById(this.id).parentNode.id; //row
		c1=this.cellIndex; // column
		//alert("before r1="+r1+"c1="+c1);
		//document.getElementById("pos").innerHTML=r1+","+c1+","+r2+","+c2;
		reset_color();				 //reseting the column color
		this.style.backgroundColor="green";		//changing the source color	
		a=this.innerHTML;					//storing to global variable
		ele=this; 						//storing the first clicked element to global var

	}
	// to reseting the td color
	function reset_color()
	{
		for (i=0;i<=max;i++)
		{
			var x=document.getElementById("col"+i);
			if(x)	x.style.backgroundColor="white";
		}
	} 
	//Arrow key codes
	function move_val(e)
	{	
		switch (e.keyCode)
			{
			case 37: move_left();break;
			case 38: move_up();break;
			case 39: move_right();break;
			case 40: move_down();break;
			}		
	}

	function move_left()
	{
		var tb=document.getElementsByTagName("table");
		//var x=t[0].rows[r1].cells[c1].innerHTML;
		ele=tb[0].rows[r1].cells[c1]; 
		//alert("s"+x);
		r2=Number(r1);
		c2=Number(c1)-1;
		if (c2>=0)
		{
		 var des=tb[0].rows[r2].cells[c2];
		// b=des.innerHTML;
		 //alert("d"+des);
		   change_val(des);
		}
	}
	
	function move_right()
	{
		var tb=document.getElementsByTagName("table");
		//var x=tb[0].rows[r1].cells[c1].innerHTML;
		ele=tb[0].rows[r1].cells[c1]; 
		//alert("s"+x);
		 r2=Number(r1);
		 c2=Number(c1)+1;
		var max_cell=tb[0].rows[r1].cells.length-1;
		if (c2<=max_cell)
		{
		 var des=tb[0].rows[r2].cells[c2];
		// b=des.innerHTML;
		 //alert("d"+b);
		   change_val(des);
		}
	}
	
	function move_up()
	{
		var tb=document.getElementsByTagName("table");
		//var x=tb[0].rows[r1].cells[c1].innerHTML;
		ele=tb[0].rows[r1].cells[c1]; 
		//alert("move up after r1="+r1+"c1="+c1);
		var r2=Number(r1)-1;
		var c2=Number(c1);
		if (r2>=0)
		{
			
		 var des=tb[0].rows[r2].cells[c2];
		// b=des.innerHTML;
		// alert("d"+b);
		   change_val(des);
		}
	}
	
	function move_down()
	{
		var tb=document.getElementsByTagName("table");
		//var x=tb[0].rows[r1].cells[c1].innerHTML;
		ele=tb[0].rows[r1].cells[c1]; 		
		//alert(" move down after r1="+r1+"c1="+c1);

		var r2=Number(r1)+1;
		
		 var c2=Number(c1);
		var max_row=tb[0].rows.length-1;
		//alert("r2"+r2+"max_row"+max_row);
		if (r2<=max_row)
		{
		 var des=tb[0].rows[r2].cells[c2];
		 //b=des.innerHTML;
		 //alert("d"+b);
		   change_val(des);
		}
	}

	function change_val(arg)
		{
		    if(arg.innerHTML==='')
			{	
				steps++;						//counting steps moved
				document.getElementById("step").innerHTML="Steps Moved:"+steps;
				ele.style.backgroundColor="white"; 		//changing the source color to white
				arg.style.backgroundColor="green"; 	//changing the destination color to white
				b=arg.innerHTML;					//storing the destination value
				arg.innerHTML=a;					//assigning the source value to the destination
				ele.innerHTML=b;					//asisgning the destination value to the source.
				r1=arg.parentNode.id; //row
				c1=arg.cellIndex; // column
				//alert("change val r1="+r1+"c1="+c1);
				var won=win();
				if (won)
				{
				   alert("Congrats you did it");	
				}
			}
	}
	
	//filling the correct array in the ascending order
	function fill_correct(len) 		
	{
		for(i=0;i<len;i++)
		{
		  correct[i]=i+1;	
		}
	}
	
	//cheking if won on every steps
	function win()
	{
		var col =document.getElementsByTagName("td");
		var won;
		for(i=0;i<max;i++)
		{
			if(col[i].innerHTML!=correct[i])
			 {
			  won=false; 
			  break;	
			 }
			else 
			{
 			  won=true;	
			}
		}
		return won;	
	}	
		
	