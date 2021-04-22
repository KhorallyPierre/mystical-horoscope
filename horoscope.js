function horoscope(){
  document.querySelector('.print').style.display = "block"
  const day = parseInt(document.querySelector('#enterDayHere').value)
  const month = parseInt(document.querySelector('#enterMonthHere').value)
  if (day <= 20 && month === 1 || day >= 21 && month === 12) {
    document.querySelector('#printHere').innerText = 'Youre a Capricorn! Capricorns collect responsibility. And they always seem to take it all on. Capricorns need to be the one to fix everything. Responsibility is their natural state. They have a “can do” attitude. They are the martyrs and the champions. They are the guardians and the judges. The team captains. The chief of chiefs. The general. The leader. But even as they lead the charge, Capricorns can feel like the loneliest people in the world. They wish to be completely self-sufficient, and are scared of depending on others.'
    document.querySelector('#presentSignHere').style.background = "url('capricorn.png') center center no-repeat "
  } else if (day <= 20 && month === 2 || day >= 21 && month === 1) {
    document.querySelector('#printHere').innerText = 'Youre an Aquarius! Aquarians make very good acquaintances. They are friendly people, but their enigmatic nature makes them difficult to get close to. You can know an Aquarius for years and still feel like you don’t know anything about their personal lives. When you ask them about themselves, they talk about the impending environmental catastrophe, or else repeat facts from the last documentary they watched.'
    document.querySelector('#presentSignHere').style.background = "url('aquarius.png') center center no-repeat"
  } else if (day <= 20 && month === 3 || day >= 21 && month === 2) {
    document.querySelector('#printHere').innerText = 'Youre a Pisces! Describing a Pisces’ personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they’re around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless. They tend to dilute themselves with larger personalities to avoid having to form coherent identities.'
    document.querySelector('#presentSignHere').style.background = "url('pisces.png') center center no-repeat"
  }  else if (day <= 20 && month === 4 || day >= 21 && month === 3) {
    document.querySelector('#printHere').innerText = 'Youre an Aries! At their core, Aries do what they want and do things their way. They are unafraid of conflict, highly competitive, honest and direct. An Aries is not weighed down by the freedom of choice, and is perhaps the sign that is least conflicted about what they want. They throw themselves at the world eagerly and without fear. It is one of their most commendable qualities, but also what causes them a great deal of pain and grief.'
    document.querySelector('#presentSignHere').style.background = "url('aries.png') center center no-repeat"
  } else if (day <= 20 && month === 5 || day >= 21 && month === 4) {
    document.querySelector('#printHere').innerText = ' Youre a Taurus! Taureans are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Taureans are an oasis of calm, a rock of dependability. Practical knowledge and experience is their modus operandi.'
    document.querySelector('#presentSignHere').style.background = "url('taurus.png') center center no-repeat"
  } else if (day <= 20 && month === 6 || day >= 21 && month === 5) {
    document.querySelector('#printHere').innerText = 'Youre a Gemini! Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved and childlike curiosity, always asking new questions. Geminis have an uncanny ability to size up a person’s character in a matter of seconds, even if they only just met them. If someone’s bluffing, they’ll be the first to notice. They are great communicators, very responsive and sensitive listeners.'
    document.querySelector('#presentSignHere').style.background = "url('gemini.png')center center no-repeat"
  } else if (day <= 20 && month === 7 || day >= 21 && month === 6) {
    document.querySelector('#printHere').innerText = 'Youre a Cancer! Cancers are homebodies. They like the comfort of the familiar. They don’t like change. They are drawn to stability and routine. They like to know what is expected. They tend to be less experimental than other signs. They have an attraction to the past. They like to keep traditions alive. They like art that reminds them of a different time. They love old stories, or old art forms. Predictable environments make them feel comfortable. They like to know what’s going to happen. They like to feel that they’re part of a bigger plan. They don’t like surprises.'
    document.querySelector('#presentSignHere').style.background = "url('cancer.png') center center no-repeat"
  } else if (day <= 20 && month === 8 || day >= 21 && month === 7) {
    document.querySelector('#printHere').innerText = 'Youre a Leon! Leos sense of honor is intense, they hold both themselves and others to a very high standard, and they are deeply wounded when someone breaks that code. There is an ingrained need for everyone to acknowledge and validate their existence. This can lead to what can be labeled as narcissistic or absolutist behavior that borders on the absurd. They hate being told what to do, but if you can get them to listen, they can usually be persuaded—especially if you make them feel like it was what they wanted all along. But they’ll always secretly resent that they didn’t reach this conclusion alone. Leos don’t like to be told to do things, and they especially dont like being forced. They demand respect and they don’t take kindly to people who don’t respect them'
    document.querySelector('#presentSignHere').style.background = "url('leo.png') center center no-repeat"
  } else if (day <= 22 && month === 9 || day >= 23 && month === 8) {
    document.querySelector('#printHere').innerText = 'Youre Virgo! It’s true that Virgos are very particular, but that doesn’t necessarily mean that they keep neat spaces. Their particularities and habits don’t necessarily line up with traditional views of cleanliness. They could live in what looks like a Tasmanian devil-style dust storm ruin, but still impose a “no shoes in the house” or “no outside clothes on the bed” rule. Maybe their house looks cluttered, but they still know where everything is. Everything has its place. Virgos prefer to exist in organized spaces, but put their service orientation over their own comfort. This can mean that a Virgo is too busy fixing the lives of those around them to put much work into providing for their own needs. They’re rarely motivated by their own self-interest.'
    document.querySelector('#presentSignHere').style.background = "url('virgo.png') center center no-repeat"
  } else if (day <= 20 && month === 10 || day >= 21 && month === 9) {
    document.querySelector('#printHere').innerText = 'Youre a Libra! Libras are compassionate and empathetic people. They are willing to go out of their way to help others. They dislike conflict and avoid confrontations. These traits lead them to be manipulated by others. Libras also have a tendency to be indecisive. They are so concerned about other peoples feelings that they let other people make decisions for them.'
    document.querySelector('#presentSignHere').style.background = "url('libra.png') center center no-repeat"
  } else if (day <= 20 && month === 11 || day >= 21 && month === 10) {
    document.querySelector('#printHere').innerText = ' Youre a Scorpio! The Scorpio personality is a profound chasm of infinite complexity (or at least how they project themselves). They are difficult people to get to know. They are psychological trap doors. They socialize from behind a double-sided mirror, always scanning, reading you while you can only see your own reflection. They prefer to be the people asking the questions. They remove your skin with their perceptive scalpel and take inventory of your pulsing viscera. They probe and push. They know the little things that make you tick. Your pressure points. The subtle ways to procure the answer they’re seeking. They are keenly aware of power, its flows, and their position within its matrix.'
    document.querySelector('#presentSignHere').style.background = "url('scorpio.png') center center no-repeat"
  } else if (day <= 20 && month === 12 || day >= 21 && month === 11) {
    document.querySelector('#printHere').innerText = ' Youre a Saggitarus! Sagittarius is an explorer. They are both the fearless adventurer and the jaded critic. They understand that knowledge comes in two forms: the shallow, disposable kind that comes from external sources, and the kind that comes from within. Sagittarius knows that external knowledge can be easily gained while internal knowledge is exponentially deeper and more powerful. They’re on a quest to delve into the depths of the universe inside the human mind. They don’t do this to prove that they have all the answers, but instead because they know that the journey is the destination.'
    document.querySelector('#presentSignHere').style.background = "url('sag.png') center center no-repeat"
  }

  document.querySelector('.intro').style.display = "none"
  // else if day <=20 && month === 2 {
  //   document.querySelector('#printHere').innerText = 'Aquarius'
  // }
}
  document.querySelector('#check').addEventListener('click', horoscope)


//   else if (age < 16) {
//     document.querySelector('#printHere').innerText = 'you cant drive and you stuck at the house, loser!'
//   } else if (age < 21 && age > 18) {
//     document.querySelector('#printHere').innerText = 'youre old enough to die in war but NOT old enough to drink.. how fucked up is that?'
//   } else if (age >= 23 && age < 30) {
//     document.querySelector('#printHere').innerText = 'enjoy your legal drink...broke ass'
//   } else if (age >= 30){
//     document.querySelector('#printHere').innerText = 'there is nothing left to live for...I hope you have valium'
//   }
// }
// }
//
// if (day <= 20) && month === 1) || if (day >=20 && month === 12)
//
// document.querySelector('#day').addEventListener('click', horoscope)
// document.querySelector('#printHere').innerText = 'Capricorn!'
//
// function ageMatters(){
//   const age = parseInt(document.querySelector('#enterTextHere').value)
//   if (day < 13) {
//     document.querySelector('#printHere').innerText = 'you are a child, go drink some milk!'
//   } else if (age < 16) {
//     document.querySelector('#printHere').innerText = 'you cant drive and you stuck at the house, loser!'
//   } else if (age < 21 && age > 18) {
//     document.querySelector('#printHere').innerText = 'youre old enough to die in war but NOT old enough to drink.. how fucked up is that?'
//   } else if (age >= 23 && age < 30) {
//     document.querySelector('#printHere').innerText = 'enjoy your legal drink...broke ass'
//   } else if (age >= 30){
//     document.querySelector('#printHere').innerText = 'there is nothing left to live for...I hope you have valium'
//   }
// }
