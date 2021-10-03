/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    } else {
        // 递归搜索子节点
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        // 找到子节点的深度，然后加 1 （即自身节点）
        return Math.max(left, right) + 1;
    }
}