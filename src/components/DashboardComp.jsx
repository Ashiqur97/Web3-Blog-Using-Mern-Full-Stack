/* eslint-disable no-unused-vars */
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DashboardComp() {
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);
    const [totalComments, setTotalComments] = useState(0);
    const [lastMonthUsers, setLastMonthUsers] = useState(0);
    const [lastMonthPosts, setLastMonthPosts] = useState(0);
    const [lastMonthComments, setLastMonthComments] = useState(0);
    const { currentUser } = useSelector((state) => state.user);
    useEffect(() => {
        const fetchUsers = async () => {
        }

        const fetchPosts = async () => {
        }

        const fetchComments = async () => {
        }

        if(currentUser.isAdmin){
            fetchUsers();
            fetchPosts();
            fetchComments();
        }
    },[currentUser])

  return (
    <div>
        DashboardComp
    </div>
  )
}
