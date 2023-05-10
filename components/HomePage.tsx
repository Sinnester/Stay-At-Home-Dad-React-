import React from 'react';

function HomePage(props) {
  const handleLearnMoreClick = () => {
    props.onPageChange('about');
  };

  return (
    <div className="page">
      <img
        src="/images/StayAtHomeDad3.jpg"
        alt="Dad doing dishes with two kids"
      />
      <h1>Welcome to Stay-at-Home Dad</h1>
      <p>Where dads rule the roost and parenting is a team sport.</p>
      <p>
        Stay-at-Home Dads (SAHDs) are fathers who take on the primary caregiver
        role for their children while their partners work outside the home.
        Although SAHDs are still a minority, their numbers have been steadily
        increasing over the years as more and more fathers choose to stay home
        with their children.
      </p>
      <p>
        Being a SAHD can be a challenging and rewarding experience. SAHDs may
        face societal stereotypes and gender norms that assume that caregiving
        is a mother's role. They may also face isolation and lack of support
        from other parents or family members.
      </p>
      <p>
        However, being a SAHD can also offer unique opportunities for bonding
        with their children, contributing to their development, and building a
        strong family unit. SAHDs can also benefit from the flexibility and
        creativity that come with managing a household and caring for children
        full-time.
      </p>
      <p>
        If you're a SAHD or thinking of becoming one, there are resources and
        support networks available to help you navigate this role. Check out
        online forums, local parent groups, and organizations that support
        fathers and families.
      </p>

      <button onClick={handleLearnMoreClick}>Learn More</button>
    </div>
  );
}

export default HomePage;
