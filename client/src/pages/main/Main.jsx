import React from 'react'
import Header from '../../components/header/header';

import BcsTokenDesc from './bcsTokenDesc/bcsTokenDesc';
import Box from './box/Box';
import Claim from './claim/Claim';
import ExploreStacks from './exploreStacks/ExploreStacks';
import NFT from './NFT/NFT';
import PlayAndEarn from './PlayAndEarn/PlayAndEarn';
import RoadMap from './roadMap/RoadMap';
import Statistics from './statistics/Statistics';
import TopBanner from './topBanner/TopBanner';



export default function Main({admin}) {
    return (
        <>
            <Header admin={admin} />

            <main className="main">
                <TopBanner />

                <BcsTokenDesc />

                <Statistics />

                <PlayAndEarn />

                <Claim />

                <ExploreStacks />

                <NFT />

                <Box />

                <RoadMap />
            </main>
        </>
    )
}