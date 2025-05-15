
import React from 'react'
import { motion } from 'framer-motion';
const ContentMainCard = () => {
  return (
    <motion.div
    className="ani container mx-auto px-4 py-10 w-[90%] m-auto  bg-white mt-10 mb-10"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="ani container mx-auto px-4 py-10 w-[90%] m-auto  bg-white mt-10 mb-10">
        <div className="font-bold text-4xl text-center mb-8">
          <h2>Unlock Rapid Social Media Growth – Get Real Followers, Likes, and Engagement with Just a Few Clicks!</h2>  
        </div>
        <div className='flex flex-wrap justify-center items-center text-center gap-15 py-10'>
        FollowersCart is your ultimate destination for elevating your social media presence. From followers and likes to comments and views, we offer premium solutions designed to amplify your digital influence. What sets us apart is our unwavering commitment to quality — delivering only high-grade, VIP-level engagement to enrich your profile and enhance your credibility.

Our network includes high-impact, authentic profiles — and in some cases, even verified accounts — ensuring your social presence not only grows but thrives with authority. This isn’t just about numbers; it’s about powerful, visible influence that drives real results.

When your posts attract attention from top-tier profiles, your chances of landing on the Instagram Explore page skyrocket. In today’s competitive social landscape, ordinary strategies fall short. Success belongs to those bold enough to outshine the rest — and at FollowersCart, we help you do exactly that.
        </div>
    </div>
</motion.div>
  )
}

export default ContentMainCard
