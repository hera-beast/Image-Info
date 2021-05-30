/*let img = $('img');
let holder = $('#holder');
let info = $('#info');
let imgInfo = 'Ime kluba';

img.on('click',function () {
info.html('')
holder.html('');
let self = $(this);

let copy = self.clone();
copy.css({
position: 'absolute',
width: self.width(),
height: self.height(),
top: self.offset().top,
left: self.offset().left
});

copy.animate({
top: holder.offset().top,
left: holder.offset().left,
width: holder.width(),
height: holder.height()
}, 1000, function(){
info.append(imgInfo);
})
holder.append(copy);
}); */


jQuery(document).ready(function($){
   
    var img=$('img');
    var holder=$('#holder');
    var info=$('#info');
    var brsl=0;
    var printText;
	
    
    img.on('click',function(){
        brsl++;
        info.html('');
       var self=$(this);
        var copy=self.clone();
        var selectText=self.attr('src');
        
        switch(selectText){
            case "images/manutd.png" :
                printText ="Ime kluba : Manchester United<br>Godina osnivanja : 1878<br>Ime stadiona : Old Trafford<br>Kapacitet stadiona : 76.000<br>Domaće prvenstvo : Engleska Premier liga<br>Nadimak : Crveni đavoli<br>Osvojene titule:<br>- Domaće prvenstvo : 20<br>- Evropska takmičenja : 6<br> Himna kluba: <a href='https://www.youtube.com/watch?v=nEsJjN98QbY' target='_blank'> <span class='anthem'>Glory glory Man United (GGMU)</span></a><br> Sajt kluba :<a href='https://www.manutd.com/' target='_blank'> <span class='club_name'>Manchester United</span></a>"
                break;
				
            case "images/barcelona.png" :
                printText = "Ime kluba : Barcelona<br>Godina osnivanja : 1899<br>Ime stadiona : Nou Camp<br>Kapacitet stadiona : 99.354<br>Domaće prvenstvo : Španska Primera<br>Nadimak : Katalonci<br>Osvojene titule:<br>- Domaće prvenstvo : Španska primera30<br>- Evropska takmičenja : 15<br> Himna kluba: <a href='https://www.youtube.com/watch?v=c-r6jGBZXTE' target='_blank'> <span class='anthem'>Barca! Barca! Barca!</span></a><br> Sajt kluba :<a href='https://www.fcbarcelona.com/en/' target='_blank'> <span class='club_name'>Barcelona</span></a>"
                break;
				
            case "images/bayern.png" :
                printText ="Ime kluba : Bayern Munchen<br>Godina osnivanja : 1900<br>Ime stadiona : Allianz Arena<br>Kapacitet stadiona : 75.024<br>Domaće prvenstvo : Bundesliga<br>Nadimak : Bavarci<br>Osvojene titule:<br>- Domaće prvenstvo : 40<br>- Evropska takmičenja : 10<br> Himna kluba: <a href='https://www.youtube.com/watch?v=VBnOwvvakxU' target='_blank'> <span class='anthem'>Stern des Südens</span></a><br> Sajt kluba :<a href='https://fcbayern.com/en' target='_blank'> <span class='club_name'>Bayern München</span></a>"
                break;
				
            case "images/chelsea.jpg" :
                printText ="Ime kluba : Chelsea<br>Godina osnivanja : 1905<br>Ime stadiona : Stamford Bridge<br>Kapacitet stadiona : 41.837<br>Domaće prvenstvo : Engleska Premier liga<br>Nadimak : Plavci<br>Osvojene titule:<br>- Domaće prvenstvo : 10<br>- Evropska takmičenja : 4<br>  Himna kluba: <a href='https://www.youtube.com/watch?v=uchOo5HU95s' target='_blank'> <span class='anthem'>Blue is the colour</span></a><br> Sajt kluba :<a href='https://www.chelseafc.com/en' target='_blank'> <span class='club_name'>Chelsea</span></a>"
                break;
				
            case "images/inter.png" :
                printText ="Ime kluba : Inter<br>Godina osnivanja : 1909<br>Ime stadiona : Giuseppe Meazza<br>Kapacitet stadiona : 80.018<br>Domaće prvenstvo : Talijanska prva liga<br>Nadimak : Nerrazurri<br>Osvojene titule:<br>- Domaće prvenstvo : 13<br>- Evropska takmičenja : 5<br> Himna kluba: <a href='https://www.youtube.com/watch?v=oFw-rfvoexo' target='_blank'> <span class='anthem'>Pazza Inter Amala</span></a><br> Sajt kluba :<a href='https://www.inter.it/en' target='_blank'> <span class='club_name'>Inter</span></a>"
                break;
				
            case "images/juventus.png" :
                printText ="Ime kluba : Juventus<br>Godina osnivanja : 1897<br>Ime stadiona : Juventus Stadium<br>Kapacitet stadiona : 41.507<br>Domaće prvenstvo : Talijanska prva liga<br>Nadimak : Stara dama<br>Osvojene titule:<br>- Domaće prvenstvo : 16<br>- Evropska takmičenja : 7<br> Himna kluba: <a href='https://www.youtube.com/watch?v=Vy9ULF7hwEY' target='_blank'> <span class='anthem'>Storia Di Un Grande Amore</span></a><br> Sajt kluba :<a href='https://www.juventus.com/en/' target='_blank'> <span class='club_name'>Juventus</span></a>"
                break;
				
                case "images/liverpool.png" :
                printText ="Ime kluba : Liverpool<br>Godina osnivanja : 1892<br>Ime stadiona : Anfield Road<br>Kapacitet stadiona : 53.394<br>Domaće prvenstvo : Engleska Premier liga<br>Nadimak : Redsi<br>Osvojene titule:<br>- Domaće prvenstvo : 20<br>- Evropska takmičenja : 8<br> Himna kluba: <a href='https://www.youtube.com/watch?v=a9sFd3Ennhs' target='_blank'> <span class='anthem'>You'll never walk alone</span></a><br> Sajt kluba :<a href='https://www.liverpoolfc.com/' target='_blank'> <span class='club_name'>Liverpool</span></a>"
                break;
				
            case "images/psg.png" :
                printText ="Ime kluba : Paris Saint-Germain (PSG)<br>Godina osnivanja : 1970<br>Ime stadiona : Parc des Princes<br>Kapacitet stadiona : 47.929<br>Domaće prvenstvo : French Ligue 1<br>Nadimak : Sveci<br>Osvojene titule:<br>- Domaće prvenstvo : 10<br>- Evropska takmičenja : 2<br>  Himna kluba: <a href='https://www.youtube.com/watch?v=fFlOx8JqAOo' target='_blank'> <span class='anthem'>Allez PSG</span></a><br> Sajt kluba :<a href='https://en.psg.fr/' target='_blank'> <span class='club_name'>Paris Saint-Germain</span></a>"
                break;
				
            case "images/realmadrid.png" :
                printText ="Ime kluba : Real Madrid<br>Godina osnivanja : 1902<br>Ime stadiona : Santiao Bernabeu<br>Kapacitet stadiona : 81.044<br>Domaće prvenstvo : Španska primera<br>Nadimak : Kraljevi<br>Osvojene titule:<br>- Domaće prvenstvo : 20<br>- Evropska takmičenja : 12<br> Himna kluba: <a href='https://www.youtube.com/watch?v=eE0Lx951VEA' target='_blank'> <span class='anthem'>Hala Madrid y Nada Más</span></a><br> Sajt kluba :<a href='https://www.realmadrid.com/' target='_blank'> <span class='club_name'>Real Madrid</span></a>"
                break;
				
            case "images/arsenal.png" :
                printText ="Ime kluba : Arsenal<br>Godina osnivanja : 1866<br>Ime stadiona : Emirates stadium<br>Kapacitet stadiona : 60.704<br>Domaće prvenstvo : Engleska Premier liga<br>Nadimak : Topdžije<br>Osvojene titule:<br>- Domaće prvenstvo : 3<br>- Evropska takmičenja : 2<br> Himna kluba: <a href='https://www.youtube.com/watch?v=40VPyFUKjn8' target='_blank'> <span class='anthem'>We're on your side</span></a><br> Sajt kluba :<a href='https://www.arsenal.com/' target='_blank'> <span class='club_name'>Arsenal</span></a>"
                break;
				
            case "images/dortmund.png" :
                printText ="Ime kluba : Dortmund<br>Godina osnivanja : 1909<br>Ime stadiona : Signal Iduna Park <br>Kapacitet stadiona : 81.365<br>Domaće prvenstvo : Bundes liga  <br>Nadimak : Milioneri<br>Osvojene titule:<br>- Domaće prvenstvo : 6<br>- Evropska takmičenja : 4<br> Himna kluba: <a href='https://www.youtube.com/watch?v=64W2bCG-PaU' target='_blank'> <span class='anthem'>Olé, jetzt kommt Der BVB </span></a><br> Sajt kluba :<a href='https://www.bvb.de/eng/' target='_blank'> <span class='club_name'>Borussia Dortmund</span></a>"
                break;
				
            case "images/milan.png" :
                printText ="Ime kluba : Milan<br>Godina osnivanja : 1899<br>Ime stadiona : San Siro <br>Kapacitet stadiona : 75.923<br>Domaće prvenstvo : Talijanska prva liga<br>Nadimak : Rossoneri<br>Osvojene titule:<br>- Domaće prvenstvo : 17<br>- Evropska takmičenja : 8<br> Himna kluba: <a href='https://www.youtube.com/watch?v=8zDhD5GWaC0' target='_blank'> <span class='anthem'>Milan, Milan!</span></a><br> Sajt kluba :<a href='https://www.acmilan.com/en' target='_blank'> <span class='club_name'>Milan</span></a>"
                break;
        }
        
        copy.css({
           position:'absolute',
            width:self.width(),
            height:self.height(),
            top:self.offset().top,
            left:self.offset().left
        });
        
        copy.animate({
            top:holder.offset().top,
            left:holder.offset().left,
            width:holder.width(),
            height:holder.height()
            
        },1000,function(){
            if(brsl==2){
                holder.find('img').eq(0).remove();
                brsl=1;
            }
            info.append(printText);
            
        });
        $('#holder').append(copy);
        
    })
    
});