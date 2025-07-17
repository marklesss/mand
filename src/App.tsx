import React, { useState } from 'react';
import { CategoryNavigation } from './components/CategoryNavigation';
import { AgentList } from './components/AgentList';
import { useNavigation } from './hooks/useNavigation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { navigationState, selectCategory, goBack } = useNavigation();


  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Show agent list if a category is selected
  if (navigationState.selectedCategory) {
    return (
      <AgentList
        category={navigationState.selectedCategory}
        onBack={goBack}
      />
    );
  }

  // Show category navigation by default
  return (
    <CategoryNavigation
      isLoggedIn={isLoggedIn}
      onToggleLogin={toggleLogin}
      onCategorySelect={selectCategory}
    />
  );
}

export default App;