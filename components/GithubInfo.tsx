import React from 'react'
import GitHubCalendar from 'react-github-calendar';

function GithubInfo() {
  return (
    <section className='mx-auto flex justify-center overflow-x-auto my-3  '>
        <GitHubCalendar
        username='omkute'
        year={2025}
        fontSize={12}
        />
    </section>
  )
}

export default GithubInfo