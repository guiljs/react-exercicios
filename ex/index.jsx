import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name='Heitor' lastName='Silva' />
    </Family>,
    document.getElementById('app'))
