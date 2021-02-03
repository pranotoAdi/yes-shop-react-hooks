import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectonsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';


import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component{
    
    unsuscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collcetions')

        this.unsuscribeFromSnapshot = collectionRef.onSnapshot(async snpashot => {
           const collectionsMap = convertCollectionSnapshotToMap(snpashot);
           updateCollections(collectionsMap);
        })
    }
    render() {
        const { match } = this.props;
        return(
            <div className='shop-name'>
            <Route exact path ={`${match.path}`} component={CollectonsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);