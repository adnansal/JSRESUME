var body=document.body
var br=document.createElement('br')

var div1=document.createElement('div')
body.appendChild(div1)
div1.id="first"

var image=document.createElement('img')
div1.appendChild(image)
image.src="pro-pic.jpg"
image.classList.add("pic")

var space=document.createElement('div')
div1.appendChild(space)
space.id="space"

var ending=document.createElement('div')
space.appendChild(ending)
ending.id="ending"

var newName=document.createElement('div')
newName.innerHTML="Pixel Pillai"
space.appendChild(newName)
newName.id="name"

var infobar=document.createElement('div')
body.appendChild(infobar)
infobar.id='infobar'

var inf=document.createElement('p')
inf.innerText=`Golconda, Hyderabad, 400001 | 9831258900 | pixelpillai@gmail.com`
infobar.appendChild(inf)
inf.id='inf'


var content_body=document.createElement('div')
content_body.id="content-body"
body.appendChild(content_body)

var main_table=document.createElement('table')
content_body.appendChild(main_table)

var main_tbody=document.createElement('tbody')
main_table.appendChild(main_tbody)

var main_tr=document.createElement('tr')
main_tbody.appendChild(main_tr)

var main_td=document.createElement('td')
main_tr.appendChild(main_td)
main_td.id="main-left"

var left_table=document.createElement('table')
main_td.appendChild(left_table)

var left_tbody=document.createElement('tbody')
left_table.appendChild(left_tbody)

var left_tr=document.createElement('tr')
left_tbody.appendChild(left_tr)
left_tr.id="profile"

var left_td=document.createElement('td')
left_tr.appendChild(left_td)

var span_icon=document.createElement('span')
span_icon.classList.add("material-icons")
span_icon.innerText="face"
left_td.appendChild(span_icon)

var profile=document.createElement('b')
profile.innerText="PROFILE"
left_td.appendChild(profile)

var pw=document.createElement('p')
pw.innerText="My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor."
left_td.appendChild(pw)

left_td.appendChild(document.createElement("br"));

var edu_tr=document.createElement('tr')
left_tbody.appendChild(edu_tr)
edu_tr.id="education"

var edu_td=document.createElement('td')
edu_tr.appendChild(edu_td)


var span_icon_1=document.createElement('span')
span_icon_1.classList.add("material-icons")
span_icon_1.innerText="school"
edu_td.appendChild(span_icon_1)

var education=document.createElement('b')
education.innerText="EDUCATION"
edu_td.appendChild(education)

var edu_par=document.createElement('p')
edu_td.appendChild(edu_par)

edu_par.appendChild(document.createElement("br"));

var edu1=document.createElement('b')
edu_par.appendChild(edu1)
edu1.innerText="Indian Institute of Technology (IIT Hyderabad), Hyderabad | 2012-2016"


var par1=document.createElement('p')
edu_par.appendChild(par1)
par1.innerText='- Bachelor’s in Technology, Information Technology | 54.5%'

edu_par.appendChild(document.createElement("br"));

var edu2=document.createElement('b')
edu_par.appendChild(edu2)
edu2.innerText="Oakridge International School, Hyderabad | 2011 - 2012"


var par2=document.createElement('p')
edu_par.appendChild(par2)
par2.innerText='- C. B. S. E | 64.8%'

edu_par.appendChild(document.createElement("br"));

var edu3=document.createElement('b')
edu_par.appendChild(edu3)
edu3.innerText="Oakridge International School, Hyderabad | 2009 - 2010"

var par3=document.createElement('p')
edu_par.appendChild(par3)
par3.innerText='- C. B. S. E. | 70.5%'

edu_par.appendChild(document.createElement("br"));



var si_tr=document.createElement('tr')
si_tr.id="skill-interests"
left_tbody.appendChild(si_tr)

var si_td=document.createElement('td')
si_tr.appendChild(si_td)


var span_icon_2=document.createElement('span')
span_icon_2.classList.add("material-icons")
span_icon_2.innerText="sports_soccer"
si_td.appendChild(span_icon_2)

var si=document.createElement('b')
si_td.appendChild(si)
si.innerText="SKILL & INTEREST"

var si_t=document.createElement('table')
si_td.appendChild(si_t)

var si_th=document.createElement('thead')
si_t.appendChild(si_th)

var si_thr=document.createElement('tr')
si_th.appendChild(si_thr)
si_thr.style.textAlign="center"


var si_trth=document.createElement('th')
si_thr.appendChild(si_trth)
si_trth.colSpan="2"
si_trth.innerText="Technical Skills"

var si_tbody=document.createElement('tbody')
si_t.appendChild(si_tbody)

var si_tbtr=document.createElement('tr')
si_tbody.appendChild(si_tbtr)

var si_trtd=document.createElement('td')
si_tbtr.appendChild(si_trtd)

var si1=document.createElement('span')
si_trtd.appendChild(si1)
si1.innerText="NodeJS"

var td3=document.createElement('td')
si_tbtr.appendChild(td3)

var si2=document.createElement('input')
td3.appendChild(si2)
si2.setAttribute('type','range')
si2.setAttribute('value','9')
si2.setAttribute('min','0')
si2.setAttribute('max','10')
si2.disabled=false

var tr4=document.createElement('tr')
si_tbody.appendChild(tr4)

var td4=document.createElement('td')
tr4.appendChild(td4)

var sp1=document.createElement('span')
td4.appendChild(sp1)
sp1.innerText="JavaScript"


var td5=document.createElement('td')
tr4.appendChild(td5)

var si3=document.createElement('input')
td5.appendChild(si3)
si3.setAttribute('type','range')
si3.setAttribute('value','9')
si3.setAttribute('min','0')
si3.setAttribute('max','10')

var tr5=document.createElement('tr')
si_tbody.appendChild(tr5)

var td6=document.createElement('td')
tr5.appendChild(td6)

var sp2=document.createElement('span')
td6.appendChild(sp2)
sp2.innerText="Mongo"


var td7=document.createElement('td')
tr5.appendChild(td7)

var si4=document.createElement('input')
td7.appendChild(si4)
si4.setAttribute('type','range')
si4.setAttribute('value','9')
si4.setAttribute('min','0')
si4.setAttribute('max','10')


//additional skill table

var t2=document.createElement('table')
left_tbody.appendChild(t2)

var th2=document.createElement('thead')
t2.appendChild(th2)

var tr_1=document.createElement('tr')
t2.appendChild(tr_1)
tr_1.style.textAlign="center"


var the1=document.createElement('th')
t2.appendChild(the1)
the1.colSpan="2"
the1.innerText="Additional Skills"

var tb1=document.createElement('tbody')
t2.appendChild(tb1)

var tr_2=document.createElement('tr')
tb1.appendChild(tr_2)

var td_1=document.createElement('td')
tr_2.appendChild(td_1)

var si_1=document.createElement('span')
td_1.appendChild(si_1)
si_1.innerText="Project Management"

var td_3=document.createElement('td')
tr_2.appendChild(td_3)

var si_2=document.createElement('input')
td_3.appendChild(si_2)
si_2.setAttribute('type','range')
si_2.setAttribute('value','9')
si_2.setAttribute('min','0')
si_2.setAttribute('max','10')
si_2.disabled=false

var tr_4=document.createElement('tr')
tb1.appendChild(tr_4)

var td_4=document.createElement('td')
tr_4.appendChild(td_4)

var sp_1=document.createElement('span')
td_4.appendChild(sp_1)
sp_1.innerText="Recruitment"


var td_5=document.createElement('td')
tr_4.appendChild(td_5)

var si_3=document.createElement('input')
td_5.appendChild(si_3)
si_3.setAttribute('type','range')
si_3.setAttribute('value','9')
si_3.setAttribute('min','0')
si_3.setAttribute('max','10')


t2.appendChild(document.createElement("br"));
//work experience

var wex_tr1=document.createElement('tr')
left_tbody.appendChild(wex_tr1)

var wex_td1=document.createElement('td')
wex_tr1.appendChild(wex_td1)

var wex_sp1=document.createElement('span')
wex_sp1.classList.add("material-icons")
wex_sp1.innerText="business_center"
wex_td1.appendChild(wex_sp1)

var wex_b1=document.createElement('b')
wex_td1.appendChild(wex_b1)
wex_b1.innerText="WORK EXPERIENCE"

//workex_1

var wex_tr2=document.createElement('tr')
left_tbody.appendChild(wex_tr2)

var wex_td2=document.createElement('td')
wex_tr2.appendChild(wex_td2)


var wex_b2=document.createElement('b')
wex_td2.appendChild(wex_b2)
wex_b2.innerText="Bank of America"

wex_b2.appendChild(document.createElement("br"));

var wex_b3=document.createElement('b')
wex_td2.appendChild(wex_b3)
wex_b3.innerText="2014 – 2019"

//wprker_2

var wex_tr3=document.createElement('tr')
left_tbody.appendChild(wex_tr3)

var wex_td3=document.createElement('td')
wex_tr3.appendChild(wex_td3)


var wex_b3=document.createElement('b')
wex_td3.appendChild(wex_b3)
wex_b3.innerText="CIO, Head of Technology & Operations, Global Wealth Management"

wex_b3.appendChild(document.createElement("br"));

var wex_p4=document.createElement('p')
wex_td3.appendChild(wex_p4)
wex_p4.innerText=`Driving client-centric evolution of core end-to-end technology and operations platforms serving 2 million affluent and high net worth clients. 
Manage over $1B in technology and operations spend and 9,000 employees.`


//workex_1

var wex_tr10=document.createElement('tr')
left_tbody.appendChild(wex_tr10)

var wex_td11=document.createElement('td')
wex_tr10.appendChild(wex_td11)


var wex_b12=document.createElement('b')
wex_td11.appendChild(wex_b12)
wex_b12.innerText="Bank of America"

wex_b12.appendChild(document.createElement("br"));

var wex_b13=document.createElement('b')
wex_td11.appendChild(wex_b13)
wex_b13.innerText="2014 – 2019"

//wprker_2

var wex_tr3=document.createElement('tr')
left_tbody.appendChild(wex_tr3)

var wex_td3=document.createElement('td')
wex_tr3.appendChild(wex_td3)


var wex_b3=document.createElement('b')
wex_td3.appendChild(wex_b3)
wex_b3.innerText="CIO, Head of Technology & Operations, Global Wealth Management"

wex_b3.appendChild(document.createElement("br"));

var wex_p4=document.createElement('p')
wex_td3.appendChild(wex_p4)
wex_p4.innerText=`Led multiple bank executive teams through strategic planning for the overall consumer bank (2010) and Home Loans & Insurance (2007, 2009). Projects led to rollout key initiatives of the customer transformation program, including digital couponing, banking product simplification, and relationship pricing incentive programs. Worked with Chief Marketing Officer to develop 5-year marketing strategy, international brand strategy, and established a marketing innovation group to discover, fund and pilot next-generation marketing channels.`


//Right Alignment

var right_td=document.createElement('td')
main_tr.appendChild(right_td)
right_td.textAlign="left"

var right_tab=document.createElement('table')
right_td.appendChild(right_tab)

var right_tbo=document.createElement('tbody')
right_tab.appendChild(right_tbo)

var righttr_1=document.createElement('tr')
right_tbo.appendChild(righttr_1)

var righttd_1=document.createElement('td')
righttr_1.appendChild(righttd_1)

var right_ico=document.createElement('span')
right_ico.classList.add("material-icons")
right_ico.innerText="construction"
righttd_1.appendChild(right_ico)

var right_b1=document.createElement('b')
righttd_1.appendChild(right_b1)
right_b1.innerText="PROJECT"

//right

var righttr_2=document.createElement('tr')
right_tbo.appendChild(righttr_2)

var righttd_2=document.createElement('td')
righttr_2.appendChild(righttd_2)

var right_b2=document.createElement('p')
righttd_2.appendChild(right_b2)
right_b2.innerText=`
My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor.
My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor.
My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor.
My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor.
My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor.
My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor.
My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor.
`


//last right

var righttr_5=document.createElement('tr')
right_tbo.appendChild(righttr_5)

var righttd_6=document.createElement('td')
righttr_5.appendChild(righttd_6)

var right_icon=document.createElement('span')
right_icon.classList.add("material-icons")
right_icon.innerText="construction"
righttd_6.appendChild(right_icon)

var right_b7=document.createElement('b')
righttd_6.appendChild(right_b7)
right_b7.innerText="PROJECT"

//right

var righttr_2=document.createElement('tr')
right_tbo.appendChild(righttr_2)

var righttd_2=document.createElement('td')
righttr_2.appendChild(righttd_2)

var right_b2=document.createElement('p')
righttd_2.appendChild(right_b2)
right_b2.innerText=`
My name is Randy Patterson, and I’m currently looking for a job in youth services. I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor.
My name is Randy Patterson, and I’m currently looking for a job in youth services. I consider myself a good public speaker, and I have a good sense of humor.
`