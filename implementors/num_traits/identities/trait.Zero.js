(function() {var implementors = {};
implementors["num_traits"] = [];implementors["num_complex"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt;",];implementors["num_bigint"] = ["impl <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>",];implementors["num_rational"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors["nalgebra"] = ["impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vector1.html' title='nalgebra::Vector1'>Vector1</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vector2.html' title='nalgebra::Vector2'>Vector2</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vector3.html' title='nalgebra::Vector3'>Vector3</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vector4.html' title='nalgebra::Vector4'>Vector4</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vector5.html' title='nalgebra::Vector5'>Vector5</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vector6.html' title='nalgebra::Vector6'>Vector6</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Quaternion.html' title='nalgebra::Quaternion'>Quaternion</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Matrix1.html' title='nalgebra::Matrix1'>Matrix1</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Matrix2.html' title='nalgebra::Matrix2'>Matrix2</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Matrix3.html' title='nalgebra::Matrix3'>Matrix3</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Matrix4.html' title='nalgebra::Matrix4'>Matrix4</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Matrix5.html' title='nalgebra::Matrix5'>Matrix5</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Matrix6.html' title='nalgebra::Matrix6'>Matrix6</a>&lt;N&gt;",];implementors["bio"] = ["impl&lt;T&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a></span>","impl <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_bigint/biguint/struct.BigUint.html' title='num_bigint::biguint::BigUint'>BigUint</a>","impl <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_bigint/bigint/struct.BigInt.html' title='num_bigint::bigint::BigInt'>BigInt</a>","impl&lt;T&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vector/struct.Vector1.html' title='nalgebra::structs::vector::Vector1'>Vector1</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vector/struct.Vector2.html' title='nalgebra::structs::vector::Vector2'>Vector2</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vector/struct.Vector3.html' title='nalgebra::structs::vector::Vector3'>Vector3</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vector/struct.Vector4.html' title='nalgebra::structs::vector::Vector4'>Vector4</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vector/struct.Vector5.html' title='nalgebra::structs::vector::Vector5'>Vector5</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vector/struct.Vector6.html' title='nalgebra::structs::vector::Vector6'>Vector6</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/quaternion/struct.Quaternion.html' title='nalgebra::structs::quaternion::Quaternion'>Quaternion</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/matrix/struct.Matrix1.html' title='nalgebra::structs::matrix::Matrix1'>Matrix1</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/matrix/struct.Matrix2.html' title='nalgebra::structs::matrix::Matrix2'>Matrix2</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/matrix/struct.Matrix3.html' title='nalgebra::structs::matrix::Matrix3'>Matrix3</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/matrix/struct.Matrix4.html' title='nalgebra::structs::matrix::Matrix4'>Matrix4</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/matrix/struct.Matrix5.html' title='nalgebra::structs::matrix::Matrix5'>Matrix5</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/matrix/struct.Matrix6.html' title='nalgebra::structs::matrix::Matrix6'>Matrix6</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
