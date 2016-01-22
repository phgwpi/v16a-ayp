var InicTime;
	       var ActualTime;
	       var nombreExp;
	       var AuxTime=new Date();
	       var Old=new Date();
	       Old.setTime(0);
	       Old.setHours(0,0,0,0);
	       var run = false;
	       var Hours = 0, Minutes = 0,Seconds =0,Milliseconds=0;
		
	       function showClock( )
	       {
		   if(run)
		   {
		       ActualTime = new Date();
		       AuxTime.setHours(0,0,0);
		       AuxTime.setTime(ActualTime.getTime() - InicTime.getTime() + Old.getTime());
		       Seconds = (AuxTime.getSeconds());
		       Minutes = (AuxTime.getMinutes());
		       Hours = (AuxTime.getHours());
		
		       document.getElementById("Hours").innerHTML = Hours;
		       document.getElementById("Minutes").innerHTML = Minutes;
		       document.getElementById("Seconds").innerHTML =  Seconds;
		
		       setTimeout("showClock()", 50);
		   }
	       }
	       
	       function pauseClock( )
	       {
		   if(!run)
		   {
		       run = true;
		       document.getElementById("botonClock").innerHTML='Pausar';
		       InicTime = new Date();
		       ActualTime = InicTime;
		       showClock();
		   }
		   else
		   {
		       run = false;
		       document.getElementById("botonClock").innerHTML= 'Continuar';
		       saveOld();
		   }
	       }
		
	       function resetClock()
	       {
		   if(run){
		       run = false;
		   }
		
		   Hours = 0;
		   Minutes = 0;
		   Seconds = 0;
		   Old.setTime(0);
		   Old.setHours(0,0,0,0);
		
		   document.getElementById("Hours").innerHTML = '0';
		   document.getElementById("Minutes").innerHTML = '0';
		   document.getElementById("Seconds").innerHTML = '0';
		   document.getElementById("botonClock").innerHTML = 'Iniciar ';
	       }
	       function saveOld()
	       {
		   Old.setTime(ActualTime.getTime() - InicTime.getTime()+ Old.getTime());
		   Hours=0;
		   Minutes=0;
		   Seconds=0;
	       }
		
	       function saveClock()
	       {
		
	       }
		
	       function initClock()
	       {
		   time = InicTime = new Date();
		   document.getElementById("Hours").innerHTML = '0';
		   document.getElementById("Minutes").innerHTML = '0';
		   document.getElementById("Seconds").innerHTML = '0';
		   document.getElementById("botonClock").innerHTML = 'Iniciar ';
	       }
	       
	       
	       
	       
	       
	       function corregir(){
		var p1
		var p2
		var p3
		var aciertos = 0
		var fallos = 0
		var blancos = 0
		var nota
		var notaFinal
		
		<!-- pregunta 1-->
		if (document.getElementById('p11').checked==true) {
		   p1 = -0.5;
		   fallos++;		   
		}else if (document.getElementById('p12').checked==true){
		      p1 = 1;
			 aciertos++;
		}else if (document.getElementById('p13').checked==true){
		      p1 = -0.5;
			fallos++;
		}else if (document.getElementById('p14').checked==true){
		      p1 = -0.5;
			 fallos++;
		}else{
		      p1= -0.1;
		      blancos++;
		      }
		      
		<!-- pregunta 2-->
		if (document.getElementById('p21').checked==true) {
		   p2 = -0.5;
		   fallos++;
		}else if (document.getElementById('p22').checked==true){
		      p2 = -0.5;
			 fallos++;
		}else if (document.getElementById('p23').checked==true){
		      p2 = 1;
			 aciertos++;
		}else if (document.getElementById('p24').checked==true){
		      p2 = -0.5;
			 fallos++;
		}else{
		      p2= -0.1;
		      blancos++;
			 }
		      		      
		<!-- pregunta 3-->
		if (document.getElementById('p31').checked==true) {
		   p3 = -0.5;
		   fallos++;
		}else if (document.getElementById('p32').checked==true){
		      p3 = 1;
			 aciertos++;
		}else if (document.getElementById('p33').checked==true){
		      p3 = -0.5;
			fallos++;
		}else if (document.getElementById('p34').checked==true){
		      p3 = -0.5;
			 fallos++;
		}else{
		      p3= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 4-->
		if (document.getElementById('p41').checked==true) {
		   p4 = -0.5;
		   fallos++;
		}else if (document.getElementById('p42').checked==true){
		      p4 = 1;
			 aciertos++;
		}else if (document.getElementById('p43').checked==true){
		      p4 = -0.5;
			fallos++;
		}else if (document.getElementById('p44').checked==true){
		      p4 = -0.5;
			 fallos++;
		}else{
		      p4= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 5-->
		if (document.getElementById('p51').checked==true) {
		   p5 = -0.5;
		   fallos++;
		}else if (document.getElementById('p52').checked==true){
		     p5 = -0.5;
			fallos++;
		}else if (document.getElementById('p53').checked==true){
		     p5 = 1;
			aciertos++;
		}else if (document.getElementById('p54').checked==true){
		      p5 = -0.5;
			 fallos++;
		}else{
		      p5= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 6-->
		if (document.getElementById('p61').checked==true) {
		   p6 = -0.5;
		   fallos++;
		}else if (document.getElementById('p62').checked==true){
		     p6 = -0.5;
			 fallos++;
		}else if (document.getElementById('p63').checked==true){
		      p6 = -0.5;
			fallos++;
		}else if (document.getElementById('p64').checked==true){
		      p6 = 1;
			 aciertos++;
		}else{
		      p6= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 7-->
		if (document.getElementById('p71').checked==true) {
		   p7 = -0.5;
		   fallos++;
		}else if (document.getElementById('p72').checked==true){
		     p7 = -0.5;
			 fallos++;
		}else if (document.getElementById('p73').checked==true){
		      p7 = -0.5;
			fallos++;
		}else if (document.getElementById('p74').checked==true){
		       p7 = 1;
			 aciertos++;
		}else{
		      p7= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 8-->
		if (document.getElementById('p81').checked==true) {
		   p8 = -0.5;
		   fallos++;
		}else if (document.getElementById('p82').checked==true){
		      p8 = 1;
			 aciertos++;
		}else if (document.getElementById('p83').checked==true){
		      p8 = -0.5;
			fallos++;
		}else if (document.getElementById('p84').checked==true){
		      p8 = -0.5;
			 fallos++;
		}else{
		      p8= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 9-->
		if (document.getElementById('p91').checked==true) {
		  p9 = 1;
		    aciertos++;
		}else if (document.getElementById('p92').checked==true){
		      p9 = -0.5;
			 fallos++;
		}else if (document.getElementById('p93').checked==true){
		      p9 = -0.5;
			fallos++;
		}else if (document.getElementById('p94').checked==true){
		      p9 = -0.5;
			 fallos++;
		}else{
		      p9= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 10-->
		if (document.getElementById('p101').checked==true) {
		   p10 = -0.5;
		   fallos++;
		}else if (document.getElementById('p102').checked==true){
		      p10 = -0.5;
			 fallos++;
		}else if (document.getElementById('p103').checked==true){
		       p10 = 1;
			 aciertos++;
		}else if (document.getElementById('p104').checked==true){
		      p10 = -0.5;
			 fallos++;
		}else{
		      p10= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 11-->
		if (document.getElementById('p111').checked==true) {
		   p11 = -0.5;
		   fallos++;
		}else if (document.getElementById('p112').checked==true){
		      p11 = -0.5;
			 fallos++;
		}else if (document.getElementById('p113').checked==true){
		      p11 = 1;
			aciertos++;
		}else if (document.getElementById('p114').checked==true){
		      p11 = -0.5;
			 fallos++;
		}else{
		      p11= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 12-->
		if (document.getElementById('p121').checked==true) {
		   p12 = -0.5;
		   fallos++;
		}else if (document.getElementById('p122').checked==true){
		      p12 = -0.5;
			 fallos++;
		}else if (document.getElementById('p123').checked==true){
		       p12 = 1;
			aciertos++;
		}else if (document.getElementById('p124').checked==true){
		      p12 = -0.5;
			 fallos++;
		}else{
		      p12= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 13-->
		if (document.getElementById('p131').checked==true) {
		   p13 = -0.5;
		   fallos++;
		}else if (document.getElementById('p132').checked==true){
		       p13 = -0.5;
			 fallos++;
		}else if (document.getElementById('p133').checked==true){
		      p13 = -0.5;
			fallos++;
		}else if (document.getElementById('p134').checked==true){
		      p13 = 1;
			 aciertos++;
		}else{
		      p13= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 14-->
		if (document.getElementById('p141').checked==true) {
		   p14 = -0.5;
		   fallos++;
		}else if (document.getElementById('p142').checked==true){
		      p14 = -0.5;
			 fallos++;
		}else if (document.getElementById('p143').checked==true){
		      p14 = 1;
			aciertos++;
		}else if (document.getElementById('p144').checked==true){
		      p14 = -0.5;
			 fallos++;
		}else{
		      p14= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 15-->
		if (document.getElementById('p151').checked==true) {
		   p15 = -0.5;
		   fallos++;
		}else if (document.getElementById('p152').checked==true){
		      p15 = 1;
			 aciertos++;
		}else if (document.getElementById('p153').checked==true){
		      p15 = -0.5;
			fallos++;
		}else if (document.getElementById('p154').checked==true){
		      p15 = -0.5;
			 fallos++;
		}else{
		      p15= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 16-->
		if (document.getElementById('p161').checked==true) {
		   p16 = 1;
		   aciertos++;
		}else if (document.getElementById('p162').checked==true){
		       p16 = -0.5;
			fallos++;
		}else if (document.getElementById('p163').checked==true){
		      p16 = -0.5;
			fallos++;
		}else if (document.getElementById('p164').checked==true){
		      p16 = -0.5;
			 fallos++;
		}else{
		      p16= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 17-->
		if (document.getElementById('p171').checked==true) {
		   p17 = -0.5;
		   fallos++;
		}else if (document.getElementById('p172').checked==true){
		       p17 = -0.5;
			 fallos++;
		}else if (document.getElementById('p173').checked==true){
		      p17 = -0.5;
			fallos++;
		}else if (document.getElementById('p174').checked==true){
		      p17 = 1;
			 aciertos++;
		}else{
		      p17= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 18-->
		if (document.getElementById('p181').checked==true) {
		   p18 = -0.5;
		   fallos++;
		}else if (document.getElementById('p182').checked==true){
		       p18 = -0.5;
			 fallos++;
		}else if (document.getElementById('p183').checked==true){
		      p18 = 1;
			aciertos++;
		}else if (document.getElementById('p184').checked==true){
		      p18 = -0.5;
			 fallos++;
		}else{
		      p18= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 19-->
		if (document.getElementById('p191').checked==true) {
		   p19 = -0.5;
		   fallos++;
		}else if (document.getElementById('p192').checked==true){
		      p19 = -0.5;
			 fallos++;
		}else if (document.getElementById('p193').checked==true){
		     p19 = 1;
			aciertos++;
		}else if (document.getElementById('p194').checked==true){
		      p19 = -0.5;
			 fallos++;
		}else{
		      p19= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 20-->
		if (document.getElementById('p201').checked==true) {
		   p20 = -0.5;
		   fallos++;
		}else if (document.getElementById('p202').checked==true){
		      p20 = 1;
			 aciertos++;
		}else if (document.getElementById('p203').checked==true){
		      p20 = -0.5;
			fallos++;
		}else if (document.getElementById('p204').checked==true){
		      p20 = -0.5;
			 fallos++;
		}else{
		      p20= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 21-->
		if (document.getElementById('p211').checked==true) {
		   p21 = -0.5;
		   fallos++;
		}else if (document.getElementById('p212').checked==true){
		      p21 = -0.5;
			 fallos++;
		}else if (document.getElementById('p213').checked==true){
		      p21 = 1;
			aciertos++;
		}else if (document.getElementById('p214').checked==true){
		      p21 = -0.5;
			 fallos++;
		}else{
		      p21= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 22-->
		if (document.getElementById('p221').checked==true) {
		   p22 = -0.5;
		   fallos++;
		}else if (document.getElementById('p222').checked==true){
		      p22 = -0.5;
			 fallos++;
		}else if (document.getElementById('p223').checked==true){
		      p22 = -0.5;
			fallos++;
		}else if (document.getElementById('p224').checked==true){
		      p22 = 1;
			 aciertos++;
		}else{
		      p22= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 23-->
		if (document.getElementById('p231').checked==true) {
		   p23 = -0.5;
		   fallos++;
		}else if (document.getElementById('p232').checked==true){
		      p23 = -0.5;
			 fallos++;
		}else if (document.getElementById('p233').checked==true){
		      p23 = -0.5;
			fallos++;
		}else if (document.getElementById('p234').checked==true){
		      p23 = 1;
			 aciertos++;
		}else{
		      p23= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 24-->
		if (document.getElementById('p241').checked==true) {
		   p24 = -0.5;
		   fallos++;
		}else if (document.getElementById('p242').checked==true){
		      p24 = 1;
			 aciertos++;
		}else if (document.getElementById('p243').checked==true){
		      p24 = -0.5;
			fallos++;
		}else if (document.getElementById('p244').checked==true){
		      p24 = -0.5;
			 fallos++;
		}else{
		      p24= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 25-->
		if (document.getElementById('p251').checked==true) {
		   p25 = -0.5;
		   fallos++;
		}else if (document.getElementById('p252').checked==true){
		      p25 = -0.5;
			 fallos++;
		}else if (document.getElementById('p253').checked==true){
		      p25 = -0.5;
			fallos++;
		}else if (document.getElementById('p254').checked==true){
		      p25 = 1;
			 aciertos++;
		}else{
		      p25= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 26-->
		if (document.getElementById('p261').checked==true) {
		   p26 = -0.5;
		   fallos++;
		}else if (document.getElementById('p262').checked==true){
		      p26 = -0.5;
			 fallos++;
		}else if (document.getElementById('p263').checked==true){
		      p26 = 1;
			aciertos++;
		}else if (document.getElementById('p264').checked==true){
		      p26 = -0.5;
			 fallos++;
		}else{
		      p26= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 27-->
		if (document.getElementById('p271').checked==true) {
		   p27 = -0.5;
		   fallos++;
		}else if (document.getElementById('p272').checked==true){
		      p27 = -0.5;
			 fallos++;
		}else if (document.getElementById('p273').checked==true){
		      p27 = 1;
			aciertos++;
		}else if (document.getElementById('p274').checked==true){
		      p27 = -0.5;
			 fallos++;
		}else{
		      p27= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 28-->
		if (document.getElementById('p281').checked==true) {
		   p28 = -0.5;
		   fallos++;
		}else if (document.getElementById('p282').checked==true){
		      p28 = -0.5;
			 fallos++;
		}else if (document.getElementById('p283').checked==true){
		      p28 = 1;
			aciertos++;
		}else if (document.getElementById('p284').checked==true){
		      p28 = -0.5;
			 fallos++;
		}else{
		      p28= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 29-->
		if (document.getElementById('p291').checked==true) {
		   p29 = -0.5;
		   fallos++;
		}else if (document.getElementById('p292').checked==true){
		      p29 = -0.5;
			 fallos++;
		}else if (document.getElementById('p293').checked==true){
		      p29 = -0.5;
			fallos++;
		}else if (document.getElementById('p294').checked==true){
		      p29 = 1;
			 aciertos++;
		}else{
		      p29= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 30-->
		if (document.getElementById('p301').checked==true) {
		   p30 = -0.5;
		   fallos++;
		}else if (document.getElementById('p302').checked==true){
		      p30 = 1;
			 aciertos++;
		}else if (document.getElementById('p303').checked==true){
		      p30 = -0.5;
			fallos++;
		}else if (document.getElementById('p304').checked==true){
		      p30 = -0.5;
			 fallos++;
		}else{
		      p30= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 31-->
		if (document.getElementById('p311').checked==true) {
		   p31 = 1;
		   aciertos++;
		}else if (document.getElementById('p312').checked==true){
		      p31 = -0.5;
			 fallos++;
		}else if (document.getElementById('p313').checked==true){
		      p31 = -0.5;
			fallos++;
		}else if (document.getElementById('p314').checked==true){
		      p31 = -0.5;
			 fallos++;
		}else{
		      p31= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 32-->
		if (document.getElementById('p321').checked==true) {
		   p32 = 1;
		   aciertos++;
		}else if (document.getElementById('p322').checked==true){
		      p32 = -0.5;
			 fallos++;
		}else if (document.getElementById('p323').checked==true){
		      p32 = -0.5;
			fallos++;
		}else if (document.getElementById('p324').checked==true){
		      p20 = -0.5;
			 fallos++;
		}else{
		      p32= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 33-->
		if (document.getElementById('p331').checked==true) {
		   p33 = -0.5;
		   fallos++;
		}else if (document.getElementById('p332').checked==true){
		      p33 = -0.5;
			 fallos++;
		}else if (document.getElementById('p333').checked==true){
		      p33 = -0.5;
			fallos++;
		}else if (document.getElementById('p334').checked==true){
		      p33 = 1;
			 aciertos++;
		}else{
		      p33= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 34-->
		if (document.getElementById('p341').checked==true) {
		   p34 = -0.5;
		   fallos++;
		}else if (document.getElementById('p342').checked==true){
		      p34 = -0.5;
			 fallos++;
		}else if (document.getElementById('p343').checked==true){
		      p34 = 1;
			aciertos++;
		}else if (document.getElementById('p344').checked==true){
		      p34 = -0.5;
			 fallos++;
		}else{
		      p34= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 35-->
		if (document.getElementById('p351').checked==true) {
		   p35 = -0.5;
		   fallos++;
		}else if (document.getElementById('p352').checked==true){
		      p35 = -0.5;
			 fallos++;
		}else if (document.getElementById('p353').checked==true){
		      p35 = -0.5;
			fallos++;
		}else if (document.getElementById('p354').checked==true){
		      p35 = 1;
			 aciertos++;
		}else{
		      p35= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 36-->
		if (document.getElementById('p361').checked==true) {
		   p36 = -0.5;
		   fallos++;
		}else if (document.getElementById('p362').checked==true){
		      p36 = -0.5;
			 fallos++;
		}else if (document.getElementById('p363').checked==true){
		      p36 = 1;
			aciertos++;
		}else if (document.getElementById('p364').checked==true){
		      p36 = -0.5;
			 fallos++;
		}else{
		      p36= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 37-->
		if (document.getElementById('p371').checked==true) {
		   p37 = -0.5;
		   fallos++;
		}else if (document.getElementById('p372').checked==true){
		      p37 = -0.5;
			 fallos++;
		}else if (document.getElementById('p373').checked==true){
		      p37 = 1;
			aciertos++;
		}else if (document.getElementById('p374').checked==true){
		      p37 = -0.5;
			 fallos++;
		}else{
		      p37= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 38-->
		if (document.getElementById('p381').checked==true) {
		   p38 = -0.5;
		   fallos++;
		}else if (document.getElementById('p382').checked==true){
		      p38 = 1;
			 aciertos++;
		}else if (document.getElementById('p383').checked==true){
		      p38 = -0.5;
			fallos++;
		}else if (document.getElementById('p384').checked==true){
		      p38 = -0.5;
			 fallos++;
		}else{
		      p38= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 39-->
		if (document.getElementById('p391').checked==true) {
		   p39 = 1;
		  aciertos++;
		}else if (document.getElementById('p392').checked==true){
		      p39 = -0.5;
			 fallos++;
		}else if (document.getElementById('p393').checked==true){
		      p39 = -0.5;
			fallos++;
		}else if (document.getElementById('p394').checked==true){
		      p39 = -0.5;
			 fallos++;
		}else{
		      p39= -0.1;
		      blancos++;
		      }
		      
		      <!-- pregunta 40-->
		if (document.getElementById('p401').checked==true) {
		   p40 = -0.5;
		   fallos++;
		}else if (document.getElementById('p402').checked==true){
		      p40 = -0.5;
			 fallos++;
		}else if (document.getElementById('p403').checked==true){
		      p40 = 1;
			aciertos++;
		}else if (document.getElementById('p404').checked==true){
		      p40 = -0.5;
			 fallos++;
		}else{
		      p40= -0.1;
		      blancos++;
		      }
		      
		      
		      
		nota = p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18+p19+p20+p21+p22+p23+p24+p25+p26+p27+p28+p29+p30+p31+p32+p33+p34+p35+p36+p37+p38+p39+p40
		if(nota<0){
		puntuacion = 0;
		}else{
		puntuacion = nota;
		}
		document.getElementById('aciertos').value = aciertos;
		document.getElementById('fallos').value = fallos;
		document.getElementById('blancos').value = blancos;
		document.getElementById('puntuacion').value = puntuacion
		}
		
		function borrando(form){
		borrar = form.reset();
		}
		
		function informa(form){
		alert("Aciertos: 1 punto.\nFallos: -050. \nEn blanco: -0.10. \n ");
		}