import React from 'react'
import Image from 'next/image'

const TeamMember = ({ member, image }) => {
    return (
        <div className='team-member'>
            <Image
                src={`${image}`}
                height={200}
                width={200}

                className='team-member__image' />
            <pre>{member}</pre>
        </div>
    )
}

export default TeamMember