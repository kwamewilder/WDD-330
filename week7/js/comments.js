export default class Comments {
    constructor(parent, elementId) {
      this.parentElement = parent;
      this.type = elementId;
      this.comment = this.getAllComments();
    }
    getAllComments() {
      let comments = JSON.parse(localStorage.getItem(this.type));
      if (!comments) {
        comments = [];
      }
      return comments;
    }
    createNewComment(commentName, comment) {
      const newComment = {
        name: commentName,
        date: new Date(),
        content: comment,
      };
      const comments = this.getAllComments();
      comments.push(newComment);
      this.comment.push(newComment);
      localStorage.setItem(this.type, JSON.stringify(comments));
      this.filterCommentsByName(commentName);
    }
    filterCommentsByName(commentName) {
      const filteredComments = [];
      if (this.comment) {
        for (let comment of this.comment) {
          if (comment.name == commentName) {
            filteredComments.push(comment);
          }
        }
      }
      renderCommentList(this.parentElement, filteredComments);
    }
    showComments() {
      this.filterCommentsByName(this.type);
      this.createListener();
    }
    createListener() {
      const submitBtn = document.getElementById("submit");
      const comment = document.getElementById("comment");
      submitBtn.addEventListener("click", () => {
        this.createNewComment(this.type, comment.value);
      });
    }
  }
  
  function renderCommentList(parent, comments) {
    parent = document.getElementById(parent);
    comments.forEach((comment) => {
      parent.appendChild(renderComment(comment));
    });
  }
  function renderComment(comment) {
    const item = document.createElement("li");
    item.classList.add("comment");
    // setting this to make getting the details for a specific comment easier later.
    item.innerHTML = `<h3>${comment.date}</h3><p>${comment.content}</p>`;
    return item;
  }