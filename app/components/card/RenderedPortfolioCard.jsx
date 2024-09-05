'use client';

import { PORTFOLIOS } from '@/datas/portfolio';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from '../modal/PortfolioModal';
import { useState } from 'react';

function RenderedPortfolioCard() {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [portfolio, setPortfolio] = useState(null);

  const handleBtnDetail = (portfolio) => {
    setPortfolio(portfolio);
    setIsOpenedModal(true);
  };

  return (
    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 min-[1100px]:grid-cols-3">
      <PortfolioModal
        isOpenedModal={isOpenedModal}
        setIsOpenedModal={setIsOpenedModal}
        portfolio={portfolio}
      />
      {PORTFOLIOS.map((portfolio, i) => (
        <PortfolioCard
          key={i}
          portfolio={portfolio}
          handleBtnDetail={handleBtnDetail}
        />
      ))}
    </div>
  );
}

export default RenderedPortfolioCard;
