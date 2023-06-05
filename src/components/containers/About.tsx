function About() {
  return (
    <div className='w-3/5 max-w-3xl mt-56'>
      <h1 className='text-7xl font-semibold'>About</h1>
      <p className='mt-5'>
        Caro is a platform that enables users to have their assets managed by AI
        models and bots without the need to deposit their funds into smart
        contracts. Instead of a traditional asset manager, users can choose from
        a list of AI bots and select a strategy that suits their needs. Third
        parties, either individuals or companies, can contribute bots by
        building API endpoints to provide asset lists and allocations. Chainlink
        Upkeeps will regularly monitor these endpoints using Chainlink Functions
        to fetch the latest data and store it on the blockchain. Users will be
        notified of any updates or can view them directly on the platform. Each
        change will be presented as a proposal, allowing users to decide whether
        to accept or reject it. If accepted, a multicall will be triggered to
        execute the necessary swaps within the user's wallet. The concept behind
        Caro is to address the security concerns related to depositing funds
        into smart contracts while acknowledging that asset management typically
        requires fewer transactions on a daily or weekly basis. We want to allow
        users to personalize their AI bots by setting parameters or preferences,
        such as risk tolerance or investment goals, so the bot can better align
        with their investment strategy. At least we aim for building a standard,
        that the third parties have to make their bots parameterizable.
        Obviously we will present also performance Metrics and Ranking on our
        page, allowing users to make informed decisions based on historical
        performance and reliability.
      </p>
    </div>
  );
}

export default About;
