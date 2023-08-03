import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useMemo } from 'react';
import { cardSlice } from '../redux/slices/cardSlice';
import { drawerSlice } from '../redux/slices/drawerSlice';
import { walletSlice } from '../redux/slices/walletSlice';

const AllActions = {
    ...cardSlice.actions,
    ...drawerSlice.actions,
    ...walletSlice.actions
}

const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(AllActions, dispatch), [dispatch]);
}

export default useActions;