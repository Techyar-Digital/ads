var adContainer = document.getElementById('techyar-adv-cont');
adContainer.style.marginTop = '15px';
adContainer.style.display = 'block';

adContainer.innerHTML = `
    <style>
* {
margin:0px;
box-sizing:border-box;
}

a {
color:#4e4e4e;
text-decoration:none;
font-family:poppins;
}

.ad-details {
width:320px;
height:100px;
padding:6px;
border:1px solid #4e4e4e20;
background-color:#4e4e4e10;
display:flex;
align-items:flex-start;
margin:0 auto;
border-radius:10px;
cursor:pointer;
}

.ad-details .ad-img {
width:80px;
height:80px;
display:flex;
justify-content:center;
align-items:center;
border:1.5px solid #4e4e4e40;
border-radius:8px;
background:white;
}

.ad-details .ad-img img {
width:100%;
height:auto;
border-radius:8px;
}

.ad-details .ad-title-des {
width:220px;
height:85px;
//border:1.5px solid #4e4e4e40;
padding:0px 6px;
}

.ad-details .ad-title-des .ad-title {
font-weight:600;
font-size:14px;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
}

.ad-details .ad-title-des .ad-description {
font-size:11px;
margin-top:6px;
height:auto;
font-weight:500;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
}

.ad-details .ad-title-des .web-label {
font-size:10px;
color:#2196f3;
display:block;
margin-top:6px;
font-weight:400;
}

.ad-details .ad-title-des .ad-label {
font-size:13px;
color:#2196f3;
display:block;
width:100%;
text-align:right;
margin-top:-6px;
margin-left:10px;
}

    </style>
<a href="http://google.com" >
<div class="ad-details" >
<div class="ad-img" >
<img src="http://techyar.netfy.org/ads/img/Logo.png" alt="Ad Image" >
</div>
<div class="ad-title-des" >
<span class="ad-title" >TechYar Business Solution.</span>
<small class="ad-description" >We provide lot of services and solutions to grow your business.</small>
<small class="web-label" >https://techyar.netfy.org</small>
<small class="ad-label fa-regular fa-ad" ></small>
</div>
</div>
</a>
</body>
</html>

`;
