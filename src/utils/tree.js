export default class TreeUtil {
    /**
     * 广度优先搜索
     * @param tree 树
     * @param callback bfs每次遍历时调用的方法，会传入每个节点
     * @param searchMore 是否查找多个
     */
    static bfsSearch(tree, callback, searchMore = false) {
        const queue = [tree];
        const children = [];
        while (queue.length) {
            const child = queue.shift();
            if (callback(child)) {
                if (searchMore) {
                    children.push(child);
                } else {
                    return child;
                }
            }
            if (child.children) {
                queue.push(...child.children);
            }
        }
        return searchMore ? children : null;
    }

    static bfsForEach(tree, callback) {
        const queue = [tree];
        while (queue.length) {
            const child = queue.shift();
            callback(child, queue);
            if (child.children) {
                queue.push(...child.children);
            }
        }
    }

    /**
     * 深度优先遍历
     * @param {*} tree
     * @param {*} callback
     */
    static dfsForEach(tree, callback, stack = []) {
        stack.push(tree);
        callback(tree, stack);
        tree.children.forEach((child) => {
            TreeUtil.dfsForEach(child, callback, stack);
        });
        stack.pop();
    }
}
