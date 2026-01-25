// composables/useProfile.ts
export const useProfile = () => {
  return {
    name: 'KAWASHIMA Mayu', 
    title: 'Student / Programmer',
    position: 'Undergraduate Student',
    affiliation: 'Cyber University',
    location: 'Chiba, Japan',
    image: '/avatar.png', 
    socials: [
      { name: '@shiomiolog', url: 'https:/github.com/shiomiolog', icon: 'i-simple-icons-github' },
      { name: '@mayu2664', url: 'https://x.com/mayu2664', icon: 'i-simple-icons-x' }
    ]
  }
}