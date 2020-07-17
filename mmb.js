const FuzzySet = require('fuzzyset');

const a = FuzzySet(null, null, null, 10);

a.add('hello this is from may i speak with please before we continue i would like you to know that this call is being recorded for quality purposes do you understand this and are you able to continue the call we are about to get started with your telephonic enrollment application for medicare insurance the process takes about 20 30 minutes and i will be asking for information to apply for a medicare insurance plan you will need to haveyour governmentissuedmedicareidcardwhichhasyour medicare idand parta and partbeffectivedatesareyou readyto getstarted');
a.add('i ll begin with your contact information first let s confirm your name as it is written on your medicare card please say and spell your first and last name');
a.add('what is your date of birth what is your gender what is your home telephone number');
a.add('whatis your home street address whatis your city what is your state zip and county');
a.add('do you have a different mailing address if yes what is your mailing street address what is your city state and zip code');
a.add('what is your email address is it ok for us to use email to communicate with you');
a.add('do you prefer a language other than english for written communications');

const transcript = 'hi uh this is non adherence from the united states medicare department may i speak with molly smith please thank you hi molly um before we continue i would like you to know that this call is being recorded for quality purposes do you understand this and are you able to continue the call yes great and i d like to get started with your enrollment application for medicare insurance um i m going to ask you a few questions regarding your application for medicare insurance and i d like to know if you have your medicare id card with you so we can confirm some information great what i need to know is your your name that s how it s written on your medicare card can you please spell it out first and last name and i need your date of birth and also your gender can you can you please give me your telephone number and your home street address uh the city that you live in in the state the zip code in the county also can you give me your at email address this is so that we can send some information to you in case uh we need to contact you also can i have your social security number this is to verify that you re eligible for medicare insurance part a and part bit s really important i have your social security number so that you can get signed up with social security as soon as possible great thank you very much and we will be contacting you as as soon as we get uh your profile set up thank you bye';

const res = a.get('It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.', null, 0);

console.log('>>>', res);
