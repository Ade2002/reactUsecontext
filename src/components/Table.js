import React from "react";
import Images from "../img/Images";
// import { TableHTMLAttributes } from 'react';
import styles from "../styles/modules/table.module.scss";

const List = () => {
  const rows = [
    {
      id: 1,
      img: Images.man,
      ticketdetails: "Contact Email not Linked",
      update: "Updated 1day ago",
      customer: "Tom Cruise",
      lastupdate: "On 24.05.2019",
      date: "May 26,2019",
      time: "6.30",
      Priority: "HIGH",
    },
    {
      id: 2,
      img: Images.man,
      ticketdetails: "Adding Images to Featured Posts",
      update: "Updated 1day ago",
      customer: "Chris Evans",
      lastupdate: "On 24.05.2019",
      date: "May 26,2019",
      time: "6.30",
      Priority: "LOW",
    },
    {
      id: 3,
      img: Images.man,
      ticketdetails: "When will I be charged this month?",
      update: "Updated 1day ago",
      customer: "Matt Damon",
      lastupdate: "On 24.05.2019",
      date: "May 26,2019",
      time: "6.30",
      Priority: "HIGH",
    },
    {
      id: 4,
      img: Images.man,
      ticketdetails: "Payment not going through",
      update: "Updated 2days ago",
      customer: "Robert Downey",
      lastupdate: "On 24.05.2019",
      date: "May 26,2019",
      time: "6.30",
      Priority: "NORMAL",
    },
    {
      id: 5,
      img: Images.man,
      ticketdetails: "Unable to add replies",
      update: "Updated 2days ago",
      customer: "Christian Bale",
      lastupdate: "On 24.05.2019",
      date: "May 26,2019",
      time: "6.30",
      Priority: "HIGH",
    },
    {
      id: 6,
      img: Images.man,
      ticketdetails: "Downtime since last week",
      update: "Updated 4days ago",
      customer: "Henry Cavil",
      lastupdate: "On 24.05.2019",
      date: "May 26,2019",
      time: "6.30",
      Priority: "NORMAL",
    },
    {
      id: 7,
      img: Images.man,
      ticketdetails: "Referral Bonus",
      update: "Updated 4days ago",
      customer: "Sam Smith",
      lastupdate: "On 24.05.2019",
      date: "May 26,2019",
      time: "6.30",
      Priority: "LOW",
    },
    {
      id: 8,
      img: Images.man,
      ticketdetails: "How do I change my password?",
      update: "Updated 6days ago",
      customer: "Steve Rogers",
      lastupdate: "On 24.05.2019",
      date: "May 26,2019",
      time: "6.30",
      Priority: "NORMAL",
    },
  ];
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className="TableCell">Ticket details</th>
          <th className="TableCell">Customer name</th>
          <th className="TableCell">Date</th>
          <th className="TableCell">Priority</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="tix">
              <img src={row.img} className="im" alt="man" />
              <div>
                {" "}
                {row.ticketdetails}
                <br />
                <small className="tan">{row.update}</small>
              </div>
            </td>
            <td className="customer">
              {row.customer}
              <br />
              <small className="tan">{row.lastupdate}</small>
            </td>

            <td className="date">
              {row.date}
              <br />
              <small className="tan">{row.time}</small>
            </td>
            <td>
              <span className={`Priority ${row.Priority}`}>
                {" "}
                {row.Priority}
              </span>
            </td>
            <td>
              {" "}
              <img src={Images.options} className="options" alt="options" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
