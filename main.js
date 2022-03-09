const LinksSocialMedia = {
  github:'jorgecardosorabello',
  youtube: 'UCgn5qaQ2Fg5J0JdzMAOzBSQ',
  facebook: 'jorgecardosorabello',
  instagram: 'jorge.cardoso.rabello',
  linkedin: 'jorgecardosorabello'
}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url= `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login

  })

}

getGitHubProfileInfos()