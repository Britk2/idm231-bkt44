const welcome = document.getElementById('welcome');
const ex_box = document.getElementById('ex_box');
const calender = document.getElementById('calender');
const help = document.querySelectorAll('.help');
help.forEach(button => {
    button.addEventListener('click', () => {
        welcome.hidden = !welcome.hidden;
        ex_box.hidden = !ex_box.hidden;
        calender.hidden = !calender.hidden;
    })
})
// const hov = document.getElementById('hover');
const des = document.getElementById('mid');
const b = document.querySelectorAll('.b');
function sw() {
    if (des.hidden = true)
        {des.hidden = !des.hidden;}
}

function rdm() {
    info.cName.innerText = 'Red Mage';
    info.art.src = 'pic/rdm_c.svg';
    info.sound = 'rdm_sound';
    info.name.innerText = 'Taline Daybreak';
    info.date.innerText = 'Dec 22 - Jan 19';
    info.desc.innerText = 'On the eastern edge of Abalathia\'s Spine lies the mountainous region of Gyr Abania. It is in these elevated lands that people took shelter, when a burning star guided them away from the Sixth Umbral Calamity\'s treacherous floodwaters. The survivors gathered from near and far, and amongst them were refugees of the sorcerous cities of Mhach and Amdapor. These sworn enemies buried their history for the sake of the future, and cast aside their vestments of black and white. Upon the remnants of their arts a new discipline was built, and the first red mages stepped forward with rapiers in hand to fight back against the rising tides of destruction.';
}
function smn() {
    info.cName.innerText = 'Summoner';
    info.art.src = 'pic/smn_c.svg';
    info.sound = 'smn_sound';
    info.name.innerText = 'Guild Apples';
    info.date.innerText = 'Jan 20 - Feb 18';
    info.desc.innerText = 'The beast tribes of Eorzea worship and summon forth beings known as primals, among which are Ifrit, Garuda, and Titan. Yet what is a god to one man is a demon to another, for the city-states of Eorzea see these beings as a grave threat to their collective survival. In times immemorial, there lived mages who had not only the power to summon the primals, but also the means to transmute the primals\' essences, thus binding them to their will. Known simply as summoners, the existence of these men and women and their arcane art have been all but lost to the ages.';
}
function pld() {
    info.cName.innerText = 'Paladin';
    info.art.src = 'pic/pld_c.svg';
    info.sound = 'pld_sound';
    info.name.innerText = 'Keksimus Maximus';
    info.date.innerText = 'Feb 19 - Mar 20';
    info.desc.innerText = 'For centuries, the elite of the Sultansworn have served as personal bodyguards to the royal family of Ul\'dah. Known as paladins, these men and women marry exquisite swordplay with stalwart shieldwork to create a style of combat uncompromising in its defense. Clad in brilliant silver armor, they charge fearlessly into battle, ever ready to lay down their lives for their liege. To be a paladin is to protect, and those who choose to walk this path will become the iron foundation upon which the party\'s defense is built.';
}
function blm() {
    info.cName.innerText = 'Black Mage';
    info.art.src = 'pic/blm_c.svg';
    info.sound = 'blm_sound';
    info.name.innerText = 'Red Doormat';
    info.date.innerText = 'Mar 21 - Apr 19';
    info.desc.innerText = 'In days long past, there existed an occult and arcane art known as black magic—a potent magic of pure destructive force born forth by a sorceress of unparalleled power. Those who learned to wield this instrument of ruin came to be called black mages, out of both fear and respect for their gift. Yet great power served to corrupt the judgment of mortal man, and so he unknowingly set out upon the path of ruin. Adventurers who take the black will become agents of devastation, capable of annihilating those who oppose them through little more than the force of their will.';
}
function drk() {
    info.cName.innerText = 'Dark Knight';
    info.art.src = 'pic/drk_c.svg';
    info.sound = 'drk_sound';
    info.name.innerText = 'Haseo Alkaid';
    info.date.innerText = 'Apr 20 - May 20';
    info.desc.innerText = 'The pious Ishgardian clergy guide the flock, and the devout knights protect the weak. Yet even the holiest of men succumb to the darkest of temptations. None dare to administer justice to these sacrosanct elite residing outside the reach of the law. Who, then, defends the feeble from the transgressions of those meant to guide and protect them? A valiant few take up arms to defend the downtrodden, and not even the holy priests and knights can escape their judgment. Pariahs in their own land, they are known by many as “dark knights.” These sentinels bear no shields declaring their allegiance. Instead, their greatswords act as beacons to guide the meek through darkness.';
}
function drg() {
    info.cName.innerText = 'Dragoon';
    info.art.src = 'pic/drg_c.svg';
    info.sound = 'drg_sound';
    info.name.innerText = 'ZenGetzume Mejia';
    info.date.innerText = 'May 21 - Jun 21';
    info.desc.innerText = 'Of all the things that are symbolic of the nation of Ishgard, few are more recognized than the dragoon. Born amidst the timeless conflict between men and dragons, these lance-wielding knights have developed an aerial style of combat, that they might better pierce the scaled hides of their mortal foes. Taking to the firmament as though it were an extension of the land, they descend upon the enemy with every onze of their bodies behind the blow. It is this penetrative power that characterizes the dragoon.';
}
function whm() {
    info.cName.innerText = 'White Mage';
    info.art.src = 'pic/whm_c.svg';
    info.sound = 'whm_sound';
    info.name.innerText = 'Chi Nami';
    info.date.innerText = 'June 22 - Jul 22';
    info.desc.innerText = 'White magic, the arcane art of succor, was conceived eras past that the world might know comfort. Alas, man began perverting its powers for self-gain, and by his wickedness brought about the Sixth Umbral catastrophe. Although the art subsequently became forbidden, it is now in the midst of a revival at the hands of the Padjal, chosen of the elementals.Those who would walk the path of the white mage are healers without peer, possessed of the power to deliver comrades from the direst of afflictions—even the icy grip of death itself.';
}
function sch() {
    info.cName.innerText = 'Scholar';
    info.art.src = 'pic/sch_c.svg';
    info.sound = 'sch_sound';
    info.name.innerText = 'Ashian Melido';
    info.date.innerText = 'Jul 23 - Aug 22';
    info.desc.innerText = 'In an age long past, when mankind flourished under the radiance of arcane mastery, the island of Vylbrand was home to a city-state called Nym. Though the history of that age tells of countless wars waged with earth-shattering incantations, it was the brilliant strategic maneuvering of Nym\'s scholars that allowed their mundane army of mariners to throw back would - be conquerers time and again. These learned men and women defended the freedom of their tiny nation with their unique command over spell - weaving faeries, utilizing the creatures\' magicks to heal the wounded and bolster the strength of their allies.';
}
function dnc() {
    info.cName.innerText = 'Dancer';
    info.art.src = 'pic/dnc_c.svg';
    info.sound = 'dnc_sound';
    info.name.innerText = 'Dorian Monroe';
    info.date.innerText = 'Aug 23 - Sep 22';
    info.desc.innerText = 'From the Near Eastern nation of Thavnair comes a troupe of bewitchingly graceful performers. Though certainly elegant and beautiful, their movements also speak of martial discipline─of a pulsing, persistent energy whose rhythm can inspire souls and soothe troubled hearts. Inured to the hardships of the road, these dancers have learned to land throwing weapons with the same exacting precision as their footfalls, removing any who would obstruct the endless beat of the dance.';
}
function ast() {
    info.cName.innerText = 'Astroligian';
    info.art.src = 'pic/ast_c.svg';
    info.sound = 'ast_sound';
    info.name.innerText = 'Punda Cake';
    info.date.innerText = 'Sep 23 - Oct 23';
    info.desc.innerText = 'Ever has man coveted knowledge, and none more so than that of his fate. Thus did he labor to master the skill of foresight—but initial efforts bore little fruit. That is, until he looked to the stars above, which foretell the coming seasons, and learned to read the heavens.Though this gift is known today as astrology, the people of Sharlayan saw fit to not only read the stars, but to write their movements as well. By attuning their aetherial energies to that of constellations, they learned to wield magicks with heretofore unseen properties.Thus was astromancy born—a new form of magick which grants its users power over fate. Employing a star globe and divining deck in their miraculous deeds, fortune always smiles upon these masters of arcana.';
}
function war() {
    info.cName.innerText = 'Warrior';
    info.art.src = 'pic/war_c.svg';
    info.sound = 'war_sound';
    info.name.innerText = 'Toi Toy';
    info.date.innerText = 'Oct 24 - Nov 21';
    info.desc.innerText = 'On the northernmost edge of Abalathia\'s Spine exists a mountain tribe renowned for producing fearsome mercenaries. Wielding greataxes and known as warriors, these men and women learn to harness their inner-beasts and translate that power to unbridled savagery on the battlefield. In former times which saw war waged ceaselessly in Eorzea, the warriors featured prominently on the front lines of battle. With the arrival of peacetime, however, their art has descended into the shadows of obscurity, where it remains to this day.';
}
function sam() {
    info.cName.innerText = 'Samurai';
    info.art.src = 'pic/sam_c.svg';
    info.sound = 'sam_sound';
    info.name.innerText = 'Kaede Akamatsu';
    info.date.innerText = 'Nov 22 - Dec 21';
    info.desc.innerText = 'Far across the rolling waves, towards the rising sun, there lies the island nation of Hingashi. In the distant past, the realm\'s great lords vied for supremacy over its seagirt confines in a long and bloody conflict. And taking to battle in their lieges\' names were noble swordsmen whose art was forged in the crucible of war: the samurai. Eventually, the nation was unified under one banner, and these warriors came to wield their katana not upon fields as part of an army, but upon streets as protectors of the peace. But as a neglected blade grows dull with rust, so too do men forget their purpose. Amidst waning memories of the old ways, a determined few hold fast to their convictions, hands by katana grips, awaiting the moment for steel to sing.';
}

b.forEach(button => {
    const id = button.id;
    button.addEventListener('click', () => {
        switch (id) {
            case 'rdm_b':
                rdm();
                break;
            case 'smn_b':
                smn();
                break;
            case 'pld_b':
                pld();
                break;
            case 'blm_b':
                blm();
                break;
            case 'drk_b':
                drk();
                break;
            case 'drg_b':
                drg();
                break;
            case 'whm_b':
                whm();
                break;
            case 'sch_b':
                sch();
                break;
            case 'dnc_b':
                dnc();
                break;
            case 'ast_b':
                ast();
                break;
            case 'war_b':
                war();
                break;
            case 'sam_b':
                sam();
                sw();
                break;
            default:
                console.log('something happened?')
        }
        sw();
    })
    // if (des.hidden != false) {
    //     button.addEventListener('mouseover', () => {
    //     hov.hidden = !hov.hidden;})
    // button.addEventListener('mouseout', () => {
    //     hov.hidden = !hov.hidden;})
    // }
})
function zodiac(cName, art, sound, name, date, desc) { //className,characterArt,sound,characterName,dateRange, desc
    this.cName = cName;
    this.art = art;
    this.sound = sound;
    this.name = name;
    this.date = date;
    this.desc = desc;
} 

const info = new zodiac(
    document.getElementById('c_name'),
    document.getElementById('picture'),
    'N/A',
    document.getElementById('name'),
    document.getElementById('date'),
    document.getElementById('des')
)
console.log(info)