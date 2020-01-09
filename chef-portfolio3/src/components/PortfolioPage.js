import React from 'react';
import styled from 'styled-components';
import headerImg from './img/profilebg.jpg';

const PortfolioPage = () => {

    const Wrapper = styled.div`


    `;

    const Header = styled.div`
        background-image: linear-gradient(to bottom,rgba(82, 28, 63, 0.76),rgba(31, 28, 82, 0.76)),url(/static/media/profilebg.2a191059.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 95vw;
        margin: 2% auto;
        height: 65vh;

    `;

    const ProfileImg = styled.div`
        background-image: url("https://images.unsplash.com/photo-1489089905289-5c91ae6e2544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
        border-radius: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 45vh;
        width: 25vw;
        max-width: 240px;
        max-height: 250px;
        left: 0;
        top: 15vh;
        position: relative;
        margin: 0 auto;
        /* overflow: overlay; */
        /* z-index: 1; */
        box-shadow: inset 0px 0px 0px 3px rgba(255, 255, 255, 0.5);
    `;

    const Body = styled.div`
        width: 85vw;
        margin: 0 auto;

    `;
    return (
       <Wrapper>
           <Header>
               <ProfileImg></ProfileImg>
           </Header>
           <h2>About</h2>
           <Body>
           <p>Let's have a happy little tree in here. You can get away with a lot. I get carried away with this brush 
               cleaning. Follow the lay of the land. It's most important. These little son of a guns hide in your brush 
               and you just have to push them out.
            </p>

            <p>Working it up and down, back and forth. A beautiful little sunset. There's not a thing in the world wrong 
                with washing your brush. Mix your color marbly don't mix it dead. Let your heart be your guide.
            </p>

            <p>Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Now let's put some 
                happy little clouds in here. Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt 
                Umber, and a little bit of Sap Green. Let your imagination just wonder around when you're doing these things.
            </p>
           </Body>
       </Wrapper>

    );

}

export default PortfolioPage