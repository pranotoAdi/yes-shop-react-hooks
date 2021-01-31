import React from 'react';
import { Route } from 'react-router-dom';

import CollectonsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-name'>
        <Route exact path ={`${match.path}`} component={CollectonsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    );

export default ShopPage;