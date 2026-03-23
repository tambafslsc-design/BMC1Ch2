export interface Question {
  questionNumber: number;
  reference: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export const questions: Question[] = [
  {
    questionNumber: 1,
    reference: "BAFS600C1Ch2-1",
    text: "Miss Young is a professional architect. She decides to set up an architecture firm on her own. However, Kitty, her best friend who is also an architect, invites her to form a partnership together. Which of the following is NOT a reason for Miss Young to accept the invitation?",
    options: {
      A: "She could have wider sources of capital.",
      B: "The business could earn more profits.",
      C: "Risks and workload of the business could be shared with Kitty.",
      D: "More expertise could be pooled together."
    },
    answer: "B",
    explanation: "Miss Young may not earn more profits even if she forms a partnership with Kitty. A, C and D are correct. They are the advantages of forming a partnership. Miss Young can enjoy these benefits when forming a partnership with Kitty."
  },
  {
    questionNumber: 2,
    reference: "BAFS600C1Ch2-2",
    text: "The involvement of Brian and Nicholas in a partnership is shown below.\n\nBrian: Limited liability: No, Investing in the business: Yes\nNicholas: Limited liability: Yes, Investing in the business: Yes\n\nWhich of the following statements are correct?\n\n(1) Nicholas is a limited partner.\n(2) Brian is a general partner.\n(3) The business is a general partnership.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. Nicholas invests in the business and enjoys limited liability. Therefore, he is a limited partner. (2) is correct. Given that Brian does not enjoy limited liability and takes part in running the business, he is a general partner. (3) is incorrect. In a general partnership, only general partners exist. Since Nicholas is a limited partner, the partnership is not a general partnership."
  },
  {
    questionNumber: 3,
    reference: "BAFS600C1Ch2-3",
    text: "Which of the following is an INCORRECT description about a sole proprietorship in Hong Kong?",
    options: {
      A: "The owner has a high flexibility in decision-making.",
      B: "The owner bears unlimited liability.",
      C: "The scale of a sole proprietorship is usually small.",
      D: "The owner enjoys a lower profits tax rate than any other forms of business enterprises."
    },
    answer: "D",
    explanation: "The profits tax rates of a sole proprietorship and a partnership in Hong Kong are the same. Thus, the sole proprietor does not enjoy a lower profits tax rate than any other forms of business enterprises. A is correct. Given that there is only one owner in a sole proprietorship, he can make decisions on his own and thus the decision-making is flexible. B is correct. Owners are required to bear unlimited liability according to the law. C is correct. As there is only one owner in a sole proprietorship, the sources of capital are limited. It is difficult to expand the business. Thus, sole proprietorships are usually small in size."
  },
  {
    questionNumber: 4,
    reference: "BAFS600C1Ch2-4",
    text: "Which of the following is NOT a disadvantage of a sole proprietorship?",
    options: {
      A: "It lacks continuity.",
      B: "It is not a legal entity.",
      C: "Its financial conditions have to be disclosed to the public.",
      D: "It has narrow sources of capital."
    },
    answer: "C",
    explanation: "A sole proprietorship is not required to disclose its financial information to the public. A and B and D are disadvantages. The continuity of a sole proprietorship is not lasting. It will be closed down if its owner passes away, goes bankrupt or withdraws. In addition, it is not a legal entity and the owner needs to bear unlimited liability. As the production scale of sole proprietorship is usually small, it is difficult for sole proprietorships to compete with listed companies in terms of capital and the size of the business."
  },
  {
    questionNumber: 5,
    reference: "BAFS600C1Ch2-5",
    text: "Peter sets up his business in the form of a sole proprietorship. Which of the following is/are the disadvantage(s) of this form of business enterprise?\n(1) difficult to expand business\n(2) difficult for the owner to maintain a good relationship with staff and customers\n(3) less flexible in decision-making",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is correct. Due to its small size and narrow sources of capital, a sole proprietorship faces difficulties in expanding its business. (2) is incorrect. With a simple organisational structure, Peter can pay personal attention to employees and customers, enabling him to maintain good relationships with them easily. (3) is incorrect. Decision-making in a sole proprietorship is flexible as Peter can make decisions by himself and does not need to discuss with others."
  },
  {
    questionNumber: 6,
    reference: "BAFS600C1Ch2-6",
    text: "There is only one owner taking part in the management of the business. If he withdraws, goes bankrupt or dies, the business has to be terminated. The business can be a _____________.\n\n(1) sole proprietorship\n(2) partnership\n(3) private limited company",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (2) only",
      D: "(1), (2) and (3)"
    },
    answer: "C",
    explanation: "(1) is correct. The sole proprietor can be the only owner who engages in managing the firm. In addition, a sole proprietorship is not a legal entity. (2) is correct. There are two types of partnership, which are general partnership and limited partnership. When there are only two owners in a limited partnership, only the general partner is involved in the operation of the business. Once he withdraws, goes bankrupt or dies, the partnership will be closed down. (3) is incorrect. A private limited company is a legal entity. The withdrawal, bankruptcy or death of the owner will not affect the continuity of the business."
  },
  {
    questionNumber: 7,
    reference: "BAFS600C1Ch2-7",
    text: "Mable runs her business in the form of a sole proprietorship. Which of the following is the least likely to be run by Mable?",
    options: {
      A: "a tutorial school",
      B: "an insurance company",
      C: "a fast food restaurant",
      D: "a convenience store"
    },
    answer: "B",
    explanation: "There is only one owner in a sole proprietorship. It is unlikely for Mable to own an insurance company as it requires a huge sum of investment. For other options, the capital required is relatively small."
  },
  {
    questionNumber: 8,
    reference: "BAFS600C1Ch2-8",
    text: "Many partnerships in Hong Kong choose to change to private limited companies. Which of the following is the reason?",
    options: {
      A: "The profits tax rate is lower.",
      B: "The business entity can enjoy lasting continuity.",
      C: "The risk of incurring a loss is lower.",
      D: "Ownership can be transferred freely."
    },
    answer: "B",
    explanation: "A partnership will dissolve once a general partner goes bankrupt, dies, or withdraws. As a result, there is no lasting continuity in a partnership. In contrast, a private limited company enjoys lasting continuity. A is incorrect. The profits tax rate of a private limited company in Hong Kong (16.5%) is higher than that of a partnership (15%). C is incorrect. It is unjustifiable to conclude that running in the form of a private limited company has a lower risk of incurring a loss. D is incorrect. No matter the business is a partnership or a private limited company, ownership cannot be transferred freely."
  },
  {
    questionNumber: 9,
    reference: "BAFS600C1Ch2-9",
    text: "What is the meaning of the word 'limited' in 'limited company'?",
    options: {
      A: "When the company liquidates, its liability is limited.",
      B: "The maximum amount of liability of the company is limited.",
      C: "The number of shareholders is limited.",
      D: "The liability of shareholders in the company is limited."
    },
    answer: "D",
    explanation: "The word \"limited\" in \"limited company\" refers to limited liability enjoyed by shareholders. It means that if the company winds down, shareholders' liabilities in the firm is limited to the amount they invest. Shareholders do not need to liquidate personal assets to repay debts of the company."
  },
  {
    questionNumber: 10,
    reference: "BAFS600C1Ch2-10",
    text: "The following shows the information of two firms:\n\nFirm A: Source of capital: Raised by issuing shares, Legal entity: Yes, Disclosure of financial statements to the public: Not required\nFirm B: Source of capital: Provided by the owners, Legal entity: Not a legal entity, Disclosure of financial statements to the public: Not required\n\nWhich of the following statements are correct?\n\n(1) Firm A is a legal entity.\n(2) Firm B is a partnership.\n(3) Firm A is a private limited company.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) and (3) are correct. Since Firm A raises capital by issuing shares, it is a limited company, so it is as well a legal entity. However, it does not need to disclose its financial statements to the public and thus it is a private limited company. (2) is correct. Since Firm B is not a legal entity and the source of capital is provided by owners, it is a partnership."
  },
  {
    questionNumber: 11,
    reference: "BAFS600C1Ch2-11",
    text: "The following shows the information about Firm 1, Firm 2 and Firm 3.\n\nFirm 1: Number of owners: 1, Disclosure of financial statements to the public: Not required, Ease of raising capital: Low\nFirm 2: Number of owners: 48, Disclosure of financial statements to the public: Not required, Ease of raising capital: Medium\nFirm 3: Number of owners: 12, Disclosure of financial statements to the public: Required, Ease of raising capital: High\n\nFirm 1, Firm 2 and Firm 3 may be a ______________, a ______________ and a ______________ respectively.",
    options: {
      A: "sole proprietorship ... private limited company ... public limited company",
      B: "private limited company ... public limited company ... partnership",
      C: "sole proprietorship ... private limited company ... partnership",
      D: "partnership ... listed company on Growth Enterprise Market ... listed company on the Main Board"
    },
    answer: "A",
    explanation: "Firm 3 must be a public limited company as this is the only form of business ownership that requires the business's financial statements to be disclosed to the public. Among the three firms, it is the easiest for Firm 3 to raise capital because it can become listed and issue shares to the public in the stock market. Considering Firms 1 and 2, neither of them can be a public limited company because their financial statements need not be disclosed to the public. Firm 1 may then be a sole proprietorship or a private limited company because it has only one owner; Firm 2 may be a partnership, or a private limited company as well. The factor that distinguishes the two therefore lies on the ease of raising capital. Firm 1 therefore has to be a sole proprietorship because then the company can only be supported by the owner's own capital. Capital raising for Firm 1 is hence harder than Firm 2 because the latter can obtain capital from a pool of partners (if it is a partnership) or a pool of shareholders (if it is a private limited company). Hence, A is the only feasible answer."
  },
  {
    questionNumber: 12,
    reference: "BAFS600C1Ch2-12",
    text: "Nana Accounting is a general partnership formed by Michael, Peter and Helen. Which of the following statements are INCORRECT?\n\n(1) Michael and Helen are free from the legal responsibilities bound by the contracts signed by Peter.\n(2) There may be a limited partner in the partnership.\n(3) Agreement must be reached among existing partners before the admission of new partners.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is incorrect. In a general partnership, all partners need to bear legal responsibilities for the decisions made by any other partners. (2) is incorrect. Since Nana Accounting is a general partnership, all partners are general partners. (3) is correct. The admission of new partners must be approved by all general partners in a partnership. Yet, it should be noted that whether the consent of limited partners (if any) is needed is determined by the partnership agreement, if there is one."
  },
  {
    questionNumber: 13,
    reference: "BAFS600C1Ch2-15",
    text: "Compared with a sole proprietorship, a general partnership ______________.\n\n(1) has lower flexibility in decision-making\n(2) has a higher profits tax rate\n(3) has a lower risk of incurring a loss",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is correct. Given that a partnership has more owners, the agreement and consent of all partners are required to make a decision. Thus, the flexibility in decision-making is lower than a sole proprietorship. (2) is incorrect. The profits tax rates of a sole proprietorship and a partnership are the same, i.e., 15%. (3) is incorrect. A partnership does not necessarily have a lower risk of incurring a loss. It depends on the macro environment as well as the management of the business."
  },
  {
    questionNumber: 14,
    reference: "BAFS600C1Ch2-16",
    text: "Mr Chui is one of the owners of a firm. He enjoys limited liability and he can freely transfer his ownership of the firm without the approval of other owners. The firm is a _____________.",
    options: {
      A: "private limited company",
      B: "public limited company",
      C: "limited partnership",
      D: "general partnership"
    },
    answer: "B",
    explanation: "Only shareholders in a public limited company have the two characteristics mentioned – enjoying limited liability and being able to transfer their ownership freely without the consent of others. A is incorrect. Shareholders in a private limited company cannot transfer their ownership freely. They need to obtain the approval from the board of directors. C and D are incorrect. No matter it is a general or limited partnership, partners (owners) cannot transfer their ownership unless they obtain an approval from all other general partners. Moreover, the partnership has to be terminated when a general partner withdraws."
  },
  {
    questionNumber: 15,
    reference: "BAFS600C1Ch2-17",
    text: "Andrew and Victor are deciding to set up a bookshop. They want to register their business in the form of a private limited company instead of a partnership. Which of the following are the disadvantages of setting up a private limited company over a partnership?\n\n(1) The setup procedures are more complicated.\n(2) It needs to disclose financial information to the public.\n(3) The profits tax rate is higher.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. For private limited companies, more documents and procedures are needed in the registration process. (2) is incorrect. Only public limited companies need to disclose financial information to the public while private limited companies need not. (3) is correct. Limited companies are charged with a higher profits tax rate than partnerships."
  },
  {
    questionNumber: 16,
    reference: "BAFS600C1Ch2-18",
    text: "Compared with a public limited company, a private limited company ______________.\n\n(1) has a lower risk of being taken over\n(2) needs not disclose financial information to the public\n(3) has a wider source of capital",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. For a private limited company, the transfer of shares has to be approved by the board of directors to prevent acquisition and control by unwanted parties. (2) is correct. Only public limited companies are required to disclose financial information to the public. (3) is incorrect. A private limited company usually has a smaller number of shareholders than a public limited company. Besides, it usually has a smaller operation scale and a weaker financial position, which results in a higher difficulty in borrowing money from financial institutions. Thus, it has a narrower source of capital."
  },
  {
    questionNumber: 17,
    reference: "BAFS600C1Ch2-19",
    text: "The similarity of a private limited company and a public limited company is that ______________.",
    options: {
      A: "owners do not bear unlimited liability",
      B: "there are no limitations on the maximum number of shareholders",
      C: "the invested amount is frozen and difficult to be cashed in a short period",
      D: "they can raise capital from the public through issuing shares"
    },
    answer: "A",
    explanation: "A limited company is a legal entity. Its owners (shareholders) enjoy limited liability, which means losses are limited to the amount they invest. B is incorrect. There can only be at most 50 shareholders in a private limited company. C is incorrect. Shares of private limited companies cannot be traded in the stock market freely before the agreement of other shareholders. Therefore, the invested amount is unable to be cashed in a short time. Yet, shares of public limited companies can be traded freely. D is incorrect. Only public limited companies can raise capital by issuing shares to the public, but not private limited companies."
  },
  {
    questionNumber: 18,
    reference: "BAFS600C1Ch2-20",
    text: "Which of the following descriptions about a partnership is/are correct?\n\n(1) A general partner's maximum loss is confined to the amount invested.\n(2) A limited partner contributes capital to the partnership but does not take part in management.\n(3) A general partnership is not bounded by contracts signed by any of the partners on behalf of the partnership.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. A general partner does not enjoy limited liability and has even to liquidate personal assets to pay for the partnership's debts. (2) is correct. A limited partner does not take part in management. (3) is incorrect. A general partnership is bound by contracts signed by other partners on behalf of the partnership."
  },
  {
    questionNumber: 19,
    reference: "BAFS600C1Ch2-21",
    text: "Which of the following are ways for a private limited company to raise capital?\n\n(1) issue ordinary and preference shares\n(2) issue debentures\n(3) borrow funds from financial institutions",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "All the options are possible ways for a private limited company to raise capital. For (1), it raises capital by equity financing. For (2) and (3), it raises capital by debt financing."
  },
  {
    questionNumber: 20,
    reference: "BAFS600C1Ch2-23",
    text: "Andrew is one of the owners of a business. He needs not perform daily business duties or pay the company’s debts with his personal assets. Yesterday, he sold some of his shares in the stock exchange. The business that Andrew owns is a _____________.",
    options: {
      A: "limited partnership",
      B: "public limited company",
      C: "sole proprietorship",
      D: "private limited company"
    },
    answer: "B",
    explanation: "As Andrew enjoys limited liability and can sell his shares in the stock market, he owns shares of a public limited company. Please note that even if Andrew holds shares of a public limited company, he can perform daily business duties. This is because managers have the chance to be given a company's shares as a reward for good performance."
  },
  {
    questionNumber: 21,
    reference: "BAFS600C1Ch2-34",
    text: "Lily and Julie are running a fast food restaurant, called ‘Together Happy Restaurant’. They both invested $500,000 into it and share the profit earned equally. If one of them withdraws from it, it can still continue its operation. Besides, the financial position of the business does not need to be disclosed to the public, but they still publish the financial report to the public every year.\n\n‘Together Happy Restaurant’ is a ______________.",
    options: {
      A: "public limited company",
      B: "public corporation",
      C: "general partnership",
      D: "private limited company"
    },
    answer: "D",
    explanation: "Together Happy Restaurant is a limited company and it enjoys lasting continuity. The withdrawal, death or bankruptcy of any owners does not affect the continuity of the business. Furthermore, the financial information needs not be disclosed to the public, indicating that it is a private limited company."
  },
  {
    questionNumber: 22,
    reference: "BAFS600C1Ch2-35",
    text: "Lily and Julie are running a fast food restaurant, called ‘Together Happy Restaurant’. They both invested $500 000 into it and share the profit earned equally. If one of them withdraws from it, it can still continue its operation. Besides, the financial position of the business does not need to be disclosed to the public, but they still publish the financial report to the public every year.\n\nDue to the economic recession, Together Happy Restaurant suffers losses amounting to $700,000. Lily and Julie are going to close down the restaurant. After liquidating all assets of the restaurant, it still owes an amount of $600,000 debts. In this case, Lily and Julie each needs to draw out ______________ to repay the debts.",
    options: {
      A: "$0",
      B: "$150,000",
      C: "$300,000",
      D: "$600,000"
    },
    answer: "A",
    explanation: "Since the company is a private limited company, Lily and Julie enjoy limited liability. This means that their liability is limited to their investment. Thus, they do no need to repay the debts of the company by liquidating their personal assets if it winds down."
  },
  {
    questionNumber: 23,
    reference: "BAFS600C1Ch2-36",
    text: "Which of the following descriptions of limited companies in Hong Kong must be correct?",
    options: {
      A: "All limited companies raise capital by issuing shares to the public.",
      B: "All shareholders have voting rights in the annual general meeting.",
      C: "All limited companies have a separate legal entity status.",
      D: "All limited companies need to disclose its financial information to the public."
    },
    answer: "C",
    explanation: "All companies are separate legal entities, which enable them to have lasting continuity. A is incorrect. Private limited companies cannot issue shares to the public. B is incorrect. Preference shareholders do not have voting rights in the annual general meeting. D is incorrect. Only public limited companies are required to disclose their financial information to the public."
  },
  {
    questionNumber: 24,
    reference: "BAFS600C1Ch2-37",
    text: "Which of the following is NOT a feature of multinational corporations (MNCs)?",
    options: {
      A: "MNCs are capital intensive and use relatively advanced technology.",
      B: "MNCs have a wide source of financing.",
      C: "MNCs are slow in decision-making.",
      D: "MNCs are mostly run by the owners."
    },
    answer: "D",
    explanation: "Since MNCs are usually listed public limited companies, there is a separation of ownership and management. They usually employ professional managers to operate the businesses."
  },
  {
    questionNumber: 25,
    reference: "BAFS600C1Ch2-40",
    text: "One of the differences between a sole proprietorship and a limited company is that the former is of ______________ while the latter is of ______________.",
    options: {
      A: "limited liability ... unlimited liability",
      B: "unlimited liability ... limited liability",
      C: "public ownership ... private ownership",
      D: "private ownership ... public ownership"
    },
    answer: "B",
    explanation: "A sole proprietorship does not enjoy limited liability and the sole proprietor has to bear all the losses. Both sole proprietorships and limited companies are private enterprises which aim at maximising profit and are privately owned."
  },
  {
    questionNumber: 26,
    reference: "BAFS600C1Ch2-41",
    text: "Which of the following concerning the maximum number of owners in a partnership and a private limited company in Hong Kong is correct?",
    options: {
      A: "Partnership: 20, Private limited company: 50",
      B: "Partnership: 20, Private limited company: 20",
      C: "Partnership: not specified, Private limited company: 50",
      D: "Partnership: not specified, Private limited company: 50"
    },
    answer: "D",
    explanation: "In Hong Kong, there is no upper limit for the number of partnership starting from 2004 (when the former limit of 20 persons was abolished). The upper limit for a private limited company is currently 50 persons."
  },
  {
    questionNumber: 27,
    reference: "BAFS600C1Ch2-42",
    text: "Which of the following descriptions about limited partners in Hong Kong is/are INCORRECT?\n\n(1) Limited partners are liable for only parts of the debts of the firm when the business terminates.\n(2) Limited partners do not share any profits of the business.\n(3) Death or bankruptcy of a limited partner terminates the business.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "D",
    explanation: "(1) is correct. Limited partners enjoy limited liability and are thus responsible to only part of the debts, which is limited to his invested amount. (2) is incorrect. Limited partners are entitled certain percentages of the net profit of the firm, despite not taking part in the management. (3) is incorrect. According to Limited Partnerships Ordinance, a limited partnership is not dissolved due to the described situations."
  },
  {
    questionNumber: 28,
    reference: "BAFS600C1Ch2-43",
    text: "Which of the following statements regarding business ownership is correct?",
    options: {
      A: "The maximum number of shareholders of private limited companies is 20.",
      B: "Only limited companies can participate in joint ventures.",
      C: "Franchisees businesses are fully owned by franchisors.",
      D: "Only general partners are personally liable for all remaining liabilities of the partnership upon liquidation."
    },
    answer: "D",
    explanation: "There are many types of partners, including general partners, limited partners and nominal partners. Among them, only general partners are personally liable for all obligations of the partnership upon liquidation or bankruptcy. A is incorrect. The maximum number should be 50 instead. B is incorrect. Members of joint ventures can be sole proprietorships, partnerships or limited companies. C is incorrect. A franchisee owns its business and bears the set-up cost of the franchise. It is just limited by its franchisor in certain aspects like the strict control of operation procedures."
  },
  {
    questionNumber: 29,
    reference: "BAFS600C1Ch2-45",
    text: "Edward started a trading firm in Hong Kong on 1 January 20X7 as the sole owner. One year later, he decided to change the form of business ownership of the firm and invited six people to invest in and join the business as owners. All owners have limited liability for the firm. Their ownerships can be freely transferred. Which of the following may be the reason behind Edward’s decision?",
    options: {
      A: "Profits tax rate is lower.",
      B: "Financial information can be disclosed so as to attract more investors.",
      C: "Different owners can contribute different abilities to improve the management of the firm.",
      D: "The sources of capital are wider."
    },
    answer: "D",
    explanation: "The old business is a sole proprietorship and the new one is a public limited company. In a sole proprietorship, there is only one owner. However, there is no restriction on the maximum number of shareholders in a public limited company, so more people can invest in the company, widening the source of capital. A is incorrect. The profits tax rate of sole proprietorships in Hong Kong is 15% while that of limited companies is 16.5%. Profits tax rate is not lowered. B is incorrect. Disclosing the financial information may not be an advantage. Competitors may make use of the information for comparison and formulating strategic plans. C is incorrect. In a public limited company, management and ownership are separated. Owners do not manage the company. Instead, the company is managed by the board of directors elected in the annual general meeting."
  }
];
