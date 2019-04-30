import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function resetRoute(routeName, params = {}) {
    console.log('from reset action')
    StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: routeName})
        ]
      })
      // this.props.navigation.dispatch(resetAction)
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  resetRoute,
};