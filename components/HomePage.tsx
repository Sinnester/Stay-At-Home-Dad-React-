import React from 'react';

function HomePage(props) {
  const handleLearnMoreClick = () => {
    props.onPageChange('about');
  };

  return (
    <div>
      <h1>Welcome to Stay-at-Home Dad</h1>
      <p>Where dads rule the roost and parenting is a team sport.</p>
      <p>
        Being a stay-at-home dad is a unique experience that comes with its own
        set of joys:
      </p>
      <ul>
        <li>Bonding with your child on a deeper level</li>
        <li>Having a flexible schedule</li>
        <li>Learning new skills and improving existing ones</li>
        <li>Being able to witness all of your child's milestones</li>
      </ul>
      <p>
        Being a stay-at-home dad is a unique experience that comes with its own
        set of challenges:
      </p>
      <ul>
        <li>Feeling isolated from other adults</li>
        <li>Feeling like your identity is tied solely to being a parent</li>
        <li>
          Struggling to balance parenting duties with other responsibilities
        </li>
      </ul>
      <button onClick={handleLearnMoreClick}>Learn More</button>
    </div>
  );
}

export default HomePage;
