import { AspectRatioBox, Box, SimpleGrid, Flex, Text } from '@chakra-ui/core';
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { MessageCard } from '../../components/Common';
import { Footer } from '../../components/Footer';
import Navigation from '../../components/Navigation';
import MainHeading from '../../components/MainHeading';
import MessageList from '../../components/MessageList';
import SubHeading from '../../components/SubHeading';

function Sermon({ content, sermon, sermons, message, ...rest }) {
  return (
    <Box maxWidth='100%' {...rest}>
      <Box
        backgroundImage='url(/assets/about_us_bg.jpg) '
        backgroundSize='cover'
        // paddingBottom={['60px', '110px', '120px']}
        backgroundColor='gray.700'
        style={{ backgroundBlendMode: 'overlay' }}
      >
        {' '}
      </Box>
      <Box m={[8, 8, 16]} margin='auto'>
        <AspectRatioBox maxW='600px' margin='auto' ratio={4 / 3}>
          <Box
            as='iframe'
            title={message.Topic}
            src={message.Video_url}
            allowFullScreen
          />
        </AspectRatioBox>
        <Box m={4}>
          <Text textAlign='center'>{message.Topic}</Text>
          <Text textAlign='center'>{message.Preacher}</Text>
        </Box>
        <SubHeading
          color='#3AC7B1'
          fontSize={['18px', '18px', '21px', '21px']}
          textAlign='center'
        >
          Share message with friends
        </SubHeading>
        <Flex alignItems='center' maxWidth='200px' margin='0 auto' left='50%'>
          <Box margin='auto'>
            <FacebookShareButton
              url={message.Video_url}
              quote={`Listen to: ${message.Topic} by ${message.Preacher}`}
              hashtags='sermon'
              title='Listen to this powerful message'
            >
              <FacebookIcon size={35} round={true} />
            </FacebookShareButton>
          </Box>
          <Box margin='auto'>
            <TwitterShareButton
              url={message.Video_url}
              hashtags={['sermon']}
              title={`Listen to: ${message.Topic} by ${message.Preacher}`}
            >
              <TwitterIcon size={35} round={true} />
            </TwitterShareButton>
          </Box>
        </Flex>
      </Box>
      <Box m={[10, 10, 20]}>
        <Box maxW='1600px' margin='auto'>
          <MainHeading
            fontSize={['20px', '20px', '32px']}
            textAlign='center'
            py={4}
          >
            MORE MESSAGES
          </MainHeading>
          <MessageList sermons={sermons} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export async function getServerSideProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://hog-website.herokuapp.com/messages/${params.id}`
  );
  const res2 = await fetch(
    'https://hog-website.herokuapp.com/messages/?_limit=3'
  );

  const message = await res.json();
  const sermons = await res2.json();

  // Pass post data to the page via props
  return { props: { message, sermons } };
}

export default Sermon;
